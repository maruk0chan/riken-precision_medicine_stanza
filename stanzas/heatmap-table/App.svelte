<script>
  import getColor from "../../lib/ColorScale";
  import toCamelCase from "../../lib/CamelCase";
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
  import {
    calculationType,
    scores,
    variantsTheads,
    drugTheads,
  } from "./data.js";
  export let dataUrl, dataGene, root;

  // const SAMPLE_JSON_PATH = "../assets/sample.json";
  console.log(dataGene);

  // Color
  const rootStyles = getComputedStyle(root);
  const firstColor = rootStyles.getPropertyValue("--first-color");
  const secondColor = rootStyles.getPropertyValue("--second-color");
  const thirdColor = rootStyles.getPropertyValue("--third-color");
  const colorRanges = [firstColor, secondColor, thirdColor];

  let dataset = [];
  let calculationsCount = {};
  let calculationsLists = [];
  let drugList = [];
  let datasetMap = [];
  let drugListMap = new Map();
  let selectDrugList = [];
  let selectedListName = "variants";
  let currentTabeList = [];
  let currentDataType = null;
  let theads = drugTheads;
  $: switch (calculationType(selectedListName).calcName) {
    case "variants":
    case "protein":
      theads = variantsTheads;
      break;
    case "mutation":
      theads = drugTheads;
      break;
  }

  const getCalculationsLists = (dataset) => {
    const calculations = dataset.map((d) => d.calculation);
    calculationsCount = calculations.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
    return [...new Set(calculations.filter(Boolean))];
  };

  const getdrugList = (dataset) => [
    ...new Set(dataset.map((d) => d.compoundId).filter(Boolean)),
  ];

  (async () => {
    try {
      const response = await fetch(dataUrl);
      // const response = await fetch(SAMPLE_JSON_PATH);
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json);
      }
      dataset = json.map(toCamelCase);
      currentTabeList = dataset;
      calculationsLists = getCalculationsLists(dataset);
      datasetMap = new Map([["variants", dataset]]);

      calculationsLists.forEach((calc) => {
        const filteredData = dataset.filter((d) => d.calculation === calc);
        datasetMap.set(calc, filteredData);

        if (calculationType(calc).calcName === "mutation") {
          drugListMap.set(calc, getdrugList(datasetMap.get(calc)));
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
      if (root.querySelector("tbody > tr.selected")) {
        root.querySelector("tbody > tr.selected").classList.remove("selected");
      }
      root.querySelector("tbody").firstChild.classList.add("selected");
      root
        .querySelector("tbody")
        .firstChild.querySelector('input[type="radio"]').checked = true;
    }
  };

  let selectedListEl = null;
  let isChangeSelectedListEl = true;
  const listHandleClick = (event) => {
    const clickedItem = event.target.closest("li, h3");
    currentDataType = clickedItem.dataset.calc;
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
      selectedListName = clickedItem.dataset.calc;
      currentTabeList = datasetMap.get(selectedListName);
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
    const variantLink = event.target.closest(".td-variant > span");
    const calculationList = event.target.closest(".td-calc > span");
    if (variantLink || calculationList) return;

    const clickedItem = event.target.closest("tr");
    const radioButton = clickedItem.querySelector('input[type="radio"]');
    clickedItem.parentElement.firstChild.classList.remove("selected");
    if (clickedItem !== tableSelectedItem) {
      if (tableSelectedItem) {
        console.log("selectChanged");
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
      data-calc={"variants"}
      on:click={listHandleClick}
      on:keydown={listHandleClick}
    >
      Variants<span class="num">{dataset.length}</span>
    </h3>
    {#if calculationsLists.length > 0}
      <ul class="column-ul">
        {#each calculationsLists as calc}
          <li
            data-calc={calc}
            on:click={listHandleClick}
            on:keydown={listHandleClick}
          >
            <img
              class={calculationType(calc).className}
              src={calculationType(calc).src}
              alt={calculationType(calc).alt}
            />{calc}<span class="num">{calculationsCount[calc]}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
  {#if calculationType(selectedListName).calcName === "mutation"}
    <div class="drugs-list">
      <h3>Drugs</h3>
      {#if drugList.length > 0}
        <ul class="drugs-ul">
          {#each selectDrugList as drugName}
            <li
              data-compound={drugName}
              on:click={drugsHandleClick}
              on:keydown={drugsHandleClick}
            >
              {drugName}<Fa
                icon={faCircleChevronRight}
                size="90%"
                color="var(--calc-color)"
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
              {#if calculationType(selectedListName).calcName === "mutation" && className.includes("th-group")}
                <th class={className} colspan="2"><p>{label}</p></th>
              {:else if calculationType(selectedListName).calcName === "mutation"}
                <th class={className} rowspan="2"><p>{label}</p></th>
              {:else}
                <th class={className}><p>{label}</p></th>
              {/if}
            {/each}
          </tr>
          {#if calculationType(selectedListName).calcName === "mutation"}
            <tr>
              <th class="th-calc" data-calc="mutation"><p>MEAN</p></th>
              <th class="th-calc" data-calc="mutation"><p>SD</p></th>
            </tr>
          {/if}
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
                      size="90%"
                      color="var(--variant-color)"
                    /></span
                  >
                </td>
                {#if calculationType(selectedListName).calcName === "variants"}
                  <td class="td-calc"
                    ><span
                      ><img
                        class={calculationType(data.calculation).className}
                        src={calculationType(data.calculation).src}
                        alt={calculationType(data.calculation).alt}
                      />
                      {calculationType(data.calculation).calcName}<Fa
                        icon={faCircleChevronRight}
                        size="90%"
                        color="var(--calc-color)"
                      /></span
                    ></td
                  >
                {:else if calculationType(selectedListName).calcName === "mutation"}
                  <td>{data.feBindMean}</td>
                  <td>{data.feBindStd}</td>
                {:else}
                  <td>{calculationType(data.calculation).calcName}</td>
                {/if}
                {#each scores as key}
                  <td class="cell-td"
                    ><div
                      class="cell"
                      style="background-color:{getColor(
                        data[key],
                        colorRanges
                      )}"
                    /></td
                  >
                {/each}
              </tr>
            {/each}
          </tbody>
        {/if}
      </table>
    </div>
    <div class="legend">
      <p>benign</p>
      <div class="legend-bar" />
      <p>pathogenic</p>
    </div>
  </div>
</div>
