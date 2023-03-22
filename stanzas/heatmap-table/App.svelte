<script>
  import metadata from "./metadata.json";
  import { camelCase } from "lodash";
  import getColor from "../../lib/ColorScale";
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/pro-duotone-svg-icons";

  const drugIcon = "../assets/drug.png";
  const proteinIcon = "../assets/protein.png";
  const arrowTheme = {
    secondaryOpacity: 1,
    primaryColor: "#000",
    size: "90%",
  };

  const heatmapValue1 = 90;
  const heatmapValue2 = 70;
  const heatmapValue3 = 50;
  const heatmapValue4 = 40;
  const heatmapValue5 = 30;
  const heatmapValue6 = 10;

  const params = metadata["stanza:parameter"].map((param) => {
    return {
      name: camelCase(param["stanza:key"]),
    };
  });
  console.log(params);
</script>

<div class="heatmap-table">
  <ul class="column-left">
    <li>Valiants list <span class="num">1234</span></li>
    <li>
      <img class="drug-icon" src={drugIcon} alt="drug icon" />Mutation FEP<span
        class="num">123</span
      >
    </li>
    <li>
      <img class="protein-icon" src={proteinIcon} alt="protein icon" />Other
      Calculation 1<span class="num">123</span>
    </li>
    <li>
      <img class="protein-icon" src={proteinIcon} alt="protein icon" />Other
      Calculation 2<span class="num">123</span>
    </li>
    <li>
      <img class="protein-icon" src={proteinIcon} alt="protein icon" />Other
      Calculation 3<span class="num">123</span>
    </li>
    <li>
      <img class="protein-icon" src={proteinIcon} alt="protein icon" />Other
      Calculation 4<span class="num">123</span>
    </li>
    <li>
      <img class="protein-icon" src={proteinIcon} alt="protein icon" />Other
      Calculation 5<span class="num">123</span>
    </li>
  </ul>
  <ul class="drugs">
    <li>Drugs</li>
    <li>
      Gefitinib<Fa
        icon={faCircleChevronRight}
        {...arrowTheme}
        secondary{...arrowTheme}
        secondaryColor="#fcb900"
      />
    </li>
    <li>
      Elotinib<Fa
        icon={faCircleChevronRight}
        {...arrowTheme}
        secondaryColor="#fcb900"
      />
    </li>
    <li>
      Crizotinib<Fa
        icon={faCircleChevronRight}
        {...arrowTheme}
        secondaryColor="#fcb900"
      />
    </li>
    <li>
      Alectinib<Fa
        icon={faCircleChevronRight}
        {...arrowTheme}
        secondaryColor="#fcb900"
      />
    </li>
    <li>
      Lorlatinib<Fa
        icon={faCircleChevronRight}
        {...arrowTheme}
        secondaryColor="#fcb900"
      />
    </li>
    <li>
      Pralsetinib<Fa
        icon={faCircleChevronRight}
        {...arrowTheme}
        secondaryColor="#fcb900"
      />
    </li>
    <li>
      Selpercatinib<Fa
        icon={faCircleChevronRight}
        {...arrowTheme}
        secondaryColor="#fcb900"
      />
    </li>
  </ul>

  <!-- Table -->
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th class="th-variant" rowspan="2">Variant</th>
          <th class="th-hgvs" rowspan="2">HGVS</th>
          <th class="th-disease th-group" colspan="2">Significance</th>
          <th class="th-calculation" rowspan="2">Calculation</th>
          <th class="th-heatmap"><span>Indicator1</span></th>
          <th class="th-heatmap"><span>Indicator2</span></th>
          <th class="th-heatmap"><span>Indicator3</span></th>
          <th class="th-heatmap"><span>Indicator4</span></th>
          <th class="th-heatmap"><span>Indicator5</span></th>
          <th class="th-heatmap"><span>Indicator6</span></th>
        </tr>
        <tr>
          <th class="th-disease">MGeND</th>
          <th class="th-disease">ClinVar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="td-variant">
            <label>
              <input
                class="radio-button"
                type="radio"
                name="variantid"
                value="I1116L"
                checked
              />
              I1116L<Fa
                icon={faCircleChevronRight}
                {...arrowTheme}
                secondaryColor="#5fdede"
              /></label
            >
          </td>
          <td>ENST00000256078:8:c.35G>T <br />ENST00000256078:8:p.Gly12Cys</td>
          <td>Pathogenic</td>
          <td>Pathogenic</td>
          <td class="td-calculation"
            ><span
              ><img
                class="drug-icon"
                src={drugIcon}
                alt="drug icon"
              />MutationFEP<Fa
                icon={faCircleChevronRight}
                {...arrowTheme}
                secondaryColor="#fcb900"
              /></span
            ></td
          >
          <td class="cell-td"
            ><div
              class="cell"
              value={heatmapValue1}
              style="background-color:{getColor(heatmapValue1)}"
            /></td
          >
          <td class="cell-td"
            ><div
              class="cell"
              value={heatmapValue2}
              style="background-color:{getColor(heatmapValue2)}"
            /></td
          >
          <td class="cell-td"
            ><div
              class="cell"
              value={heatmapValue3}
              style="background-color:{getColor(heatmapValue3)}"
            /></td
          >
          <td class="cell-td"
            ><div
              class="cell"
              value={heatmapValue4}
              style="background-color:{getColor(heatmapValue4)}"
            /></td
          >
          <td class="cell-td"
            ><div
              class="cell"
              value={heatmapValue5}
              style="background-color:{getColor(heatmapValue5)}"
            /></td
          >
          <td class="cell-td"
            ><div
              class="cell"
              value={heatmapValue6}
              style="background-color:{getColor(heatmapValue6)}"
            /></td
          >
        </tr>
        <tr>
          <td class="td-variant">
            <label>
              <input
                class="radio-button"
                type="radio"
                name="variantid"
                value="I116T"
              />
              I116T<Fa
                icon={faCircleChevronRight}
                {...arrowTheme}
                secondaryColor="#5fdede"
              />
            </label>
          </td>
          <td
            >ENST00000256078:8:c.35G>C <br />
            ENST00000256078:8:p.Gly12Arg</td
          >
          <td>not provided</td>
          <td>not provided</td>
          <td />
          <td class="cell-td"><div class="cell" /></td>
          <td class="cell-td"><div class="cell" /></td>
          <td class="cell-td"><div class="cell" /></td>
          <td class="cell-td"><div class="cell" /></td>
          <td class="cell-td"><div class="cell" /></td>
          <td class="cell-td"><div class="cell" /></td>
        </tr>
        <tr>
          <td class="td-variant">
            <label>
              <input
                class="radio-button"
                type="radio"
                name="variantid"
                value="T117N"
              />
              T117N<Fa
                icon={faCircleChevronRight}
                {...arrowTheme}
                secondaryColor="#5fdede"
              />
            </label></td
          >
          <td
            >ENST00000256078:8:c.35G>A<br />
            ENST00000256078:8:p.Gly12Ser</td
          >
          <td>Pathogenic</td>
          <td>Pathogenic</td>
          <td class="td-calculation"
            ><span
              ><img
                class="protein-icon"
                src={proteinIcon}
                alt="protein icon"
              />Other calculation<Fa
                icon={faCircleChevronRight}
                {...arrowTheme}
                secondaryColor="#fcb900"
              /></span
            ></td
          >
          <td class="cell-td"><div class="cell" /></td>
          <td class="cell-td"><div class="cell" /></td>
          <td class="cell-td"><div class="cell" /></td>
          <td class="cell-td"><div class="cell" /></td>
          <td class="cell-td"><div class="cell" /></td>
          <td class="cell-td"><div class="cell" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
