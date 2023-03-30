<script>
  import getColor from "../../lib/ColorScale";
  import toCamelCase from "../../lib/CamelCase";
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/pro-duotone-svg-icons";
  import { arrowTheme, setIcon, scores, theads } from "./data.js";
  export let params;

  const DISPLAY_DRUGS_DEFAULT = true;
  const SAMPLE_JSON_PATH =
    "https://raw.githubusercontent.com/YukikoNoda/precision-medicine/feature/heatmap-table/assets/sample.json";
  // "../assets/sample.json";

  let displayDrugs = DISPLAY_DRUGS_DEFAULT;
  let dataset = [];
  let datasetMap = [];
  let typesCount = {};
  let typeLists = [];
  let drugsList = [];

  const getTypeLists = (dataset) => {
    const types = dataset.map((d) => d.type);
    typesCount = types.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
    return [...new Set(types.filter(Boolean))];
  };

  const getDrugsList = (dataset) => [
    ...new Set(dataset.map((d) => d.compoundId).filter(Boolean)),
  ];

  const fetchData = async () => {
    try {
      const response = await fetch(params);
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json);
      }
      dataset = json.map(toCamelCase);
      datasetMap = new Map([["variants", dataset]]);
      typeLists = getTypeLists(dataset);
      drugsList = getDrugsList(dataset);
      await console.log("map", datasetMap);
    } catch (error) {
      console.error(error);
      dataset = [];
      typesCount = {};
      typeLists = [];
      drugsList = [];
    }
  };

  const getDatasetMap = async () => {
    await fetchData();
    return typeLists.reduce((acc, type) => {
      const filteredData = dataset.filter((d) => d.type === type);
      return acc.set(type, filteredData);
    }, datasetMap);
  };

  getDatasetMap().then((mapTest) => {
    console.log(mapTest);
    // console.log(mapTest.get("Mutation_FEP"));
  });

  let selectedItem = null;
  function listHandleClick(event) {
    const clickedItem = event.target.closest("li, h2");
    if (clickedItem) {
      if (clickedItem !== selectedItem) {
        if (selectedItem) {
          selectedItem.classList.remove("selected");
        }
        selectedItem = clickedItem;
        selectedItem.classList.add("selected");
      } else {
        selectedItem = null;
        clickedItem.classList.remove("selected");
      }
    }
  }

  let tableSelectedItem = null;
  function tableHandleClick(event) {
    const clickedItem = event.target.closest("tr");
    const radioButton = clickedItem.querySelector('input[type="radio"]');

    if (clickedItem) {
      clickedItem.parentElement.firstChild.classList.remove("selected");
      if (clickedItem !== tableSelectedItem) {
        if (tableSelectedItem) {
          tableSelectedItem.classList.remove("selected");
          tableSelectedItem.querySelector(
            'input[type="radio"]'
          ).checked = false;
        }
        tableSelectedItem = clickedItem;
        tableSelectedItem.classList.add("selected");
        radioButton.checked = true;
      } else {
        tableSelectedItem = null;
        clickedItem.classList.remove("selected");
        radioButton.checked = false;
      }
    }
  }
</script>

<div class="heatmap-table">
  <!-- Column -->
  <div class="column-list">
    <h2 on:click={listHandleClick} on:keydown={listHandleClick}>
      Variants<span class="num">{dataset.length}</span>
    </h2>
    {#if typeLists.length > 0}
      <ul class="column-ul">
        {#each typeLists as type}
          <li on:click={listHandleClick} on:keydown={listHandleClick}>
            <img
              class={setIcon(type).className}
              src={setIcon(type).src}
              alt={setIcon(type).alt}
            />{type}<span class="num">{typesCount[type]}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
  {#if displayDrugs}
    <div class="drugs-list">
      <h2>Drugs</h2>
      {#if drugsList.length > 0}
        <ul class="drugs-ul">
          {#each drugsList as drugsList}
            <li on:click={listHandleClick} on:keydown={listHandleClick}>
              {drugsList}<Fa
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
            <!-- {#each dataset as data, index} -->
            {#await getDatasetMap() then filterData}
              {#each filterData.get("variants") as data, index}
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
                <!-- {/each} -->
              {/each}
            {/await}
          </tbody>
        {/if}
      </table>
    </div>
  </div>
</div>
