<script>
  import { onMount } from "svelte";
  import metadata from "./metadata.json";
  import { camelCase } from "lodash";
  import getColor from "../../lib/ColorScale";
  import toCamelCase from "../../lib/CamelCase";
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/pro-duotone-svg-icons";
  import { arrowTheme, setIcon, scores, theads } from "./data.js";

  const DISPLAY_DRUGS_DEFAULT = true;
  const SAMPLE_JSON_PATH =
    "https://raw.githubusercontent.com/YukikoNoda/precision-medicine/feature/heatmap-table/assets/sample.json";
  // "../assets/sample.json";

  const params = metadata["stanza:parameter"].map((param) => {
    return {
      name: camelCase(param["stanza:key"]),
    };
  });

  let displayDrugs = DISPLAY_DRUGS_DEFAULT;
  let dataset = [];
  let typesCount = {};
  let typeLists = [];
  let drugsList = [];
  let selected;

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

  onMount(async () => {
    try {
      const response = await fetch(SAMPLE_JSON_PATH);
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json);
      }
      dataset = json.map(toCamelCase);
      typeLists = getTypeLists(dataset);
      drugsList = getDrugsList(dataset);
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div class="heatmap-table">
  <!-- Column -->
  <div class="column-list">
    <h2
      class:active={selected === "variants"}
      :click={() => (selected = "variants")}
    >
      Variants list <span class="num">{dataset.length}</span>
    </h2>
    {#if typeLists.length > 0}
      <ul class="column-ul">
        {#each typeLists as type}
          <li class:active={selected === type} :click={() => (selected = type)}>
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
            <li>
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
          {#each dataset as data, index}
            <tr>
              <td class="td-uniport">
                <label>
                  <input
                    class="radio-button"
                    type="radio"
                    name="variantid"
                    value={data.uniprotAcc}
                    checked={index === 0}
                  />
                  {data.uniprotAcc}</label
                ></td
              >
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
