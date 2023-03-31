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

  let displayDrugs = false;
  let selectedListItem = null;
  const listHandleClick = (event) => {
    const clickedItem = event.target.closest("li, h2");
    const dataType = clickedItem.dataset.type;
    selectDrugList = drugListMap.get(dataType);
    root.querySelector(".column-list > h2").classList.remove("selected");
    if (clickedItem !== selectedListItem) {
      if (selectedListItem) {
        selectedListItem.classList.remove("selected");
      }
      selectedListItem = clickedItem;
      selectedListItem.classList.add("selected");
      selectedListName = clickedItem.dataset.type;
      currentTabeList = datasetMap.get(selectedListName);
      displayDrugs =
        calculationType(selectedListName).calcName === "mutation"
          ? true
          : false;
    }
  };

  let selectedDrug = null;
  const drugsHandleClick = (event) => {
    const clickedItem = event.target.closest("li");
    root
      .querySelector(".drugs-list > ul")
      .firstChild.classList.remove("selected");
    if (clickedItem !== selectedDrug) {
      if (selectedDrug) {
        selectedDrug.classList.remove("selected");
      }
      selectedDrug = clickedItem;
      selectedDrug.classList.add("selected");
    } else {
      selectedDrug = null;
      clickedItem.classList.remove("selected");
    }
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
    <h2
      class="selected"
      data-type={"variants"}
      on:click={listHandleClick}
      on:keydown={listHandleClick}
    >
      Variants<span class="num">{dataset.length}</span>
    </h2>
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
      <h2>Drugs</h2>
      {#if drugList.length > 0}
        <ul class="drugs-ul">
          {#each selectDrugList as drugName, index}
            <li
              class={index === 0 ? "selected" : ""}
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
  </div>
</div>
