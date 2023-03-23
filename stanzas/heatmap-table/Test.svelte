<script>
  import metadata from "./metadata.json";
  import { camelCase } from "lodash";
  import getColor from "../../lib/ColorScale";
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/pro-duotone-svg-icons";
  import {
    arrowTheme,
    columnLists,
    drugsLists,
    tableLists,
    setIcon,
  } from "./data.js";

  let displayDrugs = false;

  const params = metadata["stanza:parameter"].map((param) => {
    return {
      name: camelCase(param["stanza:key"]),
    };
  });
  console.log(params);
</script>

<div class="heatmap-table">
  <!-- Column -->
  <ul class="column-list">
    <li>Valiants list <span class="num">1234</span></li>
    {#each columnLists as { label, num, calc }}
      <li>
        <img
          class={setIcon(calc).className}
          src={setIcon(calc).src}
          alt={setIcon(calc).alt}
        />{label}<span class="num">{num}</span>
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
          <th class="th-variant" rowspan="2">Variant</th>
          <th class="th-hgvs" rowspan="2">HGVS</th>
          <th class="th-disease th-group" colspan="2">Significance</th>
          <th class="th-calculation" rowspan="2">Calculation</th>
          <th class="th-heatmap" rowspan="2"><span>Indicator1</span></th>
          <th class="th-heatmap" rowspan="2"><span>Indicator2</span></th>
          <th class="th-heatmap" rowspan="2"><span>Indicator3</span></th>
          <th class="th-heatmap" rowspan="2"><span>Indicator4</span></th>
          <th class="th-heatmap" rowspan="2"><span>Indicator5</span></th>
          <th class="th-heatmap" rowspan="2"><span>Indicator6</span></th>
        </tr>
        <tr>
          <th class="th-disease">MGeND</th>
          <th class="th-disease">ClinVar</th>
        </tr>
      </thead>
      <tbody>
        {#each tableLists as { variant, hgvs, mgend, clinvar, calc, heatmapValue1, heatmapValue2, heatmapValue3, heatmapValue4, heatmapValue5, heatmapValue6 }, index}
          <tr>
            <td class="td-variant">
              <label>
                <input
                  class="radio-button"
                  type="radio"
                  name="variantid"
                  value={variant}
                  checked={index === 0}
                />

                {variant}<Fa
                  icon={faCircleChevronRight}
                  {...arrowTheme}
                  secondaryColor="#5fdede"
                /></label
              >
            </td>
            <td class="td-hgvs">{hgvs}</td>
            <td>{mgend}</td>
            <td>{clinvar}</td>
            <td class="td-calculation">
              {#if calc}
                <span
                  ><img
                    class={setIcon(calc).className}
                    src={setIcon(calc).src}
                    alt={setIcon(calc).alt}
                  />{calc}
                  <Fa
                    icon={faCircleChevronRight}
                    {...arrowTheme}
                    secondaryColor="#fcb900"
                  /></span
                >
              {/if}
            </td>
            <td class="cell-td"
              ><div
                class="cell"
                style="background-color:{getColor(heatmapValue1)}"
              /></td
            >
            <td class="cell-td"
              ><div
                class="cell"
                style="background-color:{getColor(heatmapValue2)}"
              /></td
            >
            <td class="cell-td"
              ><div
                class="cell"
                style="background-color:{getColor(heatmapValue3)}"
              /></td
            >
            <td class="cell-td"
              ><div
                class="cell"
                style="background-color:{getColor(heatmapValue4)}"
              /></td
            >
            <td class="cell-td"
              ><div
                class="cell"
                style="background-color:{getColor(heatmapValue5)}"
              /></td
            >
            <td class="cell-td"
              ><div
                class="cell"
                style="background-color:{getColor(heatmapValue6)}"
              /></td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
