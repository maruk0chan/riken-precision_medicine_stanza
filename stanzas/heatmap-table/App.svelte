<script>
  import metadata from "./metadata.json";
  import { camelCase } from "lodash";
  import getColor from "../../lib/ColorScale";
  import toCamelCase from "../../lib/CamelCase";
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/pro-duotone-svg-icons";
  import {
    arrowTheme,
    columnLists,
    drugsLists,
    setIcon,
    scores,
    theads,
  } from "./data.js";
  import json from "./sample.json";
  let displayDrugs = true;

  const params = metadata["stanza:parameter"].map((param) => {
    return {
      name: camelCase(param["stanza:key"]),
    };
  });

  let mutationLength = 0;
  json.forEach((d) => (d.Type === "Mutation_FEP" ? mutationLength++ : ""));

  const dataset = json.map((d) => toCamelCase(d));
</script>

<div class="heatmap-table">
  <!-- Column -->
  <ul class="column-list">
    <li>Valiants list <span class="num">{json.length}</span></li>
    {#each columnLists as { label, calc }}
      <li>
        <img
          class={setIcon(calc).className}
          src={setIcon(calc).src}
          alt={setIcon(calc).alt}
        />{label}<span class="num">{mutationLength}</span>
      </li>
    {/each}
  </ul>
  {#if displayDrugs}
    <ul class="drugs">
      <li>Drugs</li>
      {#each drugsLists as drugsList}
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
