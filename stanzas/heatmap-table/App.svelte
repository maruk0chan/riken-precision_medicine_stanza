<script>
  import metadata from "./metadata.json";
  import { camelCase } from "lodash";
  import getColor from "../../lib/ColorScale";
  import toCamelCase from "../../lib/CamelCase";
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/pro-duotone-svg-icons";
  import { arrowTheme, setIcon, scores, theads } from "./data.js";
  import json from "./sample.json";
  let displayDrugs = true;

  const params = metadata["stanza:parameter"].map((param) => {
    return {
      name: camelCase(param["stanza:key"]),
    };
  });
  const dataset = json.map((d) => toCamelCase(d));
  console.log(dataset);

  const types = [];
  dataset.forEach((d) => types.push(d.type));
  const typesCount = {};
  for (let i = 0; i < types.length; i++) {
    const item = types[i];
    typesCount[item] = typesCount[item] ? typesCount[item] + 1 : 1;
  }
  const typeLists = [...new Set(types)];

  const drugs = [];
  dataset.forEach((d) => drugs.push(d.compoundId));
  const drugsList = [...new Set(drugs)];
</script>

<div class="heatmap-table">
  <!-- Column -->
  <ul class="column-list">
    <li>Valiants list <span class="num">{json.length}</span></li>
    {#each typeLists as type}
      {#if type}
        <li>
          <img
            class={setIcon(type).className}
            src={setIcon(type).src}
            alt={setIcon(type).alt}
          />{type.replace("_", " ")}<span class="num">{typesCount[type]}</span>
        </li>
      {/if}
    {/each}
  </ul>
  {#if displayDrugs}
    <ul class="drugs">
      <li>Drugs</li>
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

  <!-- Table -->
  <div class="table-container">
    <table>
      <thead>
        <tr>
          {#each theads as { className, label }}
            <th class={className}>{label}</th>
          {/each}
        </tr>
      </thead>
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
    </table>
  </div>
</div>
