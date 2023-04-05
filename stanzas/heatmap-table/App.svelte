<script>
  import getColor from "../../lib/ColorScale";
  import toCamelCase from "../../lib/CamelCase";
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/pro-duotone-svg-icons";
  import { arrowTheme, calculationType, scores, theads } from "./data.js";
  export let params, root;

  const SAMPLE_JSON_PATH =
    "https://raw.githubusercontent.com/YukikoNoda/precision-medicine/feature/heatmap-table/assets/sample.json";
  // "../assets/sample.json";

  let dataset = [];
  let typesCount = {};
  let typeLists = [];
  let drugList = [];
  let datasetMap = [];
  let drugListMap = new Map();
  let selectDrugList = [];
  let selectedListName = "variants";
  let currentTabeList = [];
  let currentDataType = null;

  const getTypeLists = (dataset) => {
    const types = dataset.map((d) => d.type);
    typesCount = types.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
    return [...new Set(types.filter(Boolean))];
  };

  const getdrugList = (dataset) => [
    ...new Set(dataset.map((d) => d.compoundId).filter(Boolean)),
  ];

  (async () => {
    try {
      const response = await fetch(params);
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json);
      }
      dataset = json.map(toCamelCase);
      currentTabeList = dataset;
      typeLists = getTypeLists(dataset);
      datasetMap = new Map([["variants", dataset]]);

      typeLists.forEach((type) => {
        const filteredData = dataset.filter((d) => d.type === type);
        datasetMap.set(type, filteredData);

        if (calculationType(type).calcName === "mutation") {
          drugListMap.set(type, getdrugList(datasetMap.get(type)));
        }
      });
      drugList = getdrugList(dataset);
    } catch (error) {
      console.error(error);
    }
  })();

  const initTableSelected = () => {
    if (root.querySelector("tbody")) {
      const trs = root.querySelectorAll("tbody > tr");
      trs.forEach((tr) => {
        const radio = tr.querySelector('input[type="radio"]');
        if (radio.checked) {
          radio.checked = false;
        }
      });
      root.querySelector("tbody > tr.selected").classList.remove("selected");
      root.querySelector("tbody").firstChild.classList.add("selected");
      root
        .querySelector("tbody")
        .firstChild.querySelector('input[type="radio"]').checked = true;
    }
  };

  let displayDrugs = false;
  let selectedListEl = null;
  let isChangeSelectedListEl = true;
  const listHandleClick = (event) => {
    const clickedItem = event.target.closest("li, h3");
    currentDataType = clickedItem.dataset.type;
    selectDrugList = drugListMap.get(currentDataType);
    const h3El = root.querySelector(".column-list > h3");
    h3El.classList.remove("selected");
    if (clickedItem !== selectedListEl) {
      if (selectedListEl) {
        selectedListEl.classList.remove("selected");
        isChangeSelectedListEl = true;
      } else if (!selectedListEl && clickedItem === h3El) {
        isChangeSelectedListEl = false;
      }
      selectedListEl = clickedItem;
      selectedListEl.classList.add("selected");
      selectedListName = clickedItem.dataset.type;
      currentTabeList = datasetMap.get(selectedListName);
      displayDrugs =
        calculationType(selectedListName).calcName === "mutation"
          ? true
          : false;
    } else {
      isChangeSelectedListEl = false;
    }

    if (isChangeSelectedListEl) {
      initTableSelected();
    }
  };

  let selectedDrug = null;
  let currentMutationTabeList = [];
  const drugsHandleClick = (event) => {
    const clickedItem = event.target.closest("li");
    const currentDrugDataset = datasetMap.get(currentDataType);
    currentMutationTabeList = [];

    if (clickedItem !== selectedDrug) {
      if (selectedDrug) {
        selectedDrug.classList.remove("selected");
        currentMutationTabeList = [];
      }
      selectedDrug = clickedItem;
      selectedDrug.classList.add("selected");

      currentDrugDataset.forEach((data) => {
        if (data.compoundId === clickedItem.dataset.compound) {
          currentMutationTabeList.push(data);
        }
      });
      currentTabeList = currentMutationTabeList;
    } else {
      selectedDrug = null;
      clickedItem.classList.remove("selected");
      currentTabeList = currentDrugDataset;
    }

    initTableSelected();
  };

  let tableSelectedItem = null;
  const tableHandleClick = (event) => {
    const clickedItem = event.target.closest("tr");
    const radioButton = clickedItem.querySelector('input[type="radio"]');
    clickedItem.parentElement.firstChild.classList.remove("selected");
    if (clickedItem !== tableSelectedItem) {
      if (tableSelectedItem) {
        tableSelectedItem.classList.remove("selected");
        tableSelectedItem.querySelector('input[type="radio"]').checked = false;
      }
      tableSelectedItem = clickedItem;
      tableSelectedItem.classList.add("selected");
      radioButton.checked = true;
    } else {
      tableSelectedItem = null;
      clickedItem.classList.remove("selected");
      radioButton.checked = false;
    }
  };
</script>

<div class="heatmap-table">
  <!-- Column -->
  <div class="column-list">
    <h3
      class="selected"
      data-type={"variants"}
      on:click={listHandleClick}
      on:keydown={listHandleClick}
    >
      Variants<span class="num">{dataset.length}</span>
    </h3>
    {#if typeLists.length > 0}
      <ul class="column-ul">
        {#each typeLists as type}
          <li
            data-type={type}
            on:click={listHandleClick}
            on:keydown={listHandleClick}
          >
            <img
              class={calculationType(type).className}
              src={calculationType(type).src}
              alt={calculationType(type).alt}
            />{type}<span class="num">{typesCount[type]}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
  {#if displayDrugs}
    <div class="drugs-list">
      <h3>Drugs</h3>
      {#if drugList.length > 0}
        <ul class="drugs-ul">
          {#each selectDrugList as drugName, index}
            <li
              data-compound={drugName}
              on:click={drugsHandleClick}
              on:keydown={drugsHandleClick}
            >
              {drugName}<Fa
                icon={faCircleChevronRight}
                {...arrowTheme}
                secondaryColor="#fcb900"
              />
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {/if}

  <!-- Table -->
  <div class="table-container">
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            {#each theads as { className, label }}
              {#if className.includes("th-group")}
                <th class={className}><p>{label}</p></th>
              {:else}
                <th class={className} rowspan="2"><p>{label}</p></th>
              {/if}
            {/each}
          </tr>
          <tr>
            <th class="th-calc"><p>SD</p></th>
          </tr>
        </thead>
        {#if dataset.length > 0}
          <tbody>
            {#each currentTabeList as data, index}
              <tr
                class={index === 0 ? "selected" : ""}
                on:click={tableHandleClick}
              >
                <td class="td-uniport">
                  <input
                    class="radio-button"
                    type="radio"
                    name="variantid"
                    value={data.uniprotAcc}
                    checked={index === 0}
                  />
                  {data.uniprotAcc}
                </td>
                <td class="td-variant">
                  <span>
                    {data.variant}<Fa
                      icon={faCircleChevronRight}
                      {...arrowTheme}
                      secondaryColor="#5fdede"
                    /></span
                  >
                </td>
                <td>{data.feBind}</td>
                {#each scores as key}
                  <td class="cell-td"
                    ><div
                      class="cell"
                      style="background-color:{getColor(data[key])}"
                    /></td
                  >
                {/each}
              </tr>
            {/each}
          </tbody>
        {/if}
      </table>
    </div>
    <div class="legends">
      <p>benign</p>
      <div class="legends-bar" />
      <p>pathogenic</p>
    </div>
  </div>
</div>
