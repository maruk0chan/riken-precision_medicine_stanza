<script>
  import metadata from "./metadata.json";
  import { camelCase } from "lodash";
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

  const drugIcon = "../assets/drug.png";
  const proteinIcon = "../assets/protein.png";

  const params = metadata["stanza:parameter"].map((param) => {
    return {
      name: camelCase(param["stanza:key"]),
    };
  });
  console.log(params);
</script>

<div class="heatmap-table">
  <ul class="column-left">
    <li class="variants">Valiants list <span class="num">1234</span></li>
    <li class="calc-list">
      <img class="drug-icon" src={drugIcon} alt="drug icon" />Mutation FEP<span
        class="num">123</span
      >
    </li>
    <li class="calc-list">
      <img class="protein-icon" src={proteinIcon} alt="protein icon" />Other
      Calculation 1<span class="num">123</span>
    </li>
    <li class="calc-list">
      <img class="protein-icon" src={proteinIcon} alt="protein icon" />Other
      Calculation 2<span class="num">123</span>
    </li>
    <li class="calc-list">
      <img class="protein-icon" src={proteinIcon} alt="protein icon" />Other
      Calculation 3<span class="num">123</span>
    </li>
    <li class="calc-list">
      <img class="protein-icon" src={proteinIcon} alt="protein icon" />Other
      Calculation 4<span class="num">123</span>
    </li>
    <li class="calc-list">
      <img class="protein-icon" src={proteinIcon} alt="protein icon" />Other
      Calculation 5<span class="num">123</span>
    </li>
  </ul>
  <ul class="drugs">
    <li>Drugs</li>
    <li class="druglist">
      Gefitinib<Fa
        icon={faCircleChevronRight}
        class="fa-arrow calc-arrow"
        color="#fcb900"
      /><span class="fa-span" />
    </li>
    <li class="druglist">
      Elotinib<Fa
        icon={faCircleChevronRight}
        class="fa-arrow"
        color="#fcb900"
      />
    </li>
    <li class="druglist">
      Crizotinib<Fa
        icon={faCircleChevronRight}
        class="fa-arrow"
        color="#fcb900"
      />
    </li>
    <li class="druglist">
      Alectinib<Fa
        icon={faCircleChevronRight}
        class="fa-arrow"
        color="#fcb900"
      />
    </li>
    <li class="druglist">
      Lorlatinib<Fa
        icon={faCircleChevronRight}
        class="fa-arrow"
        color="#fcb900"
      />
    </li>
    <li class="druglist">
      Pralsetinib<Fa
        icon={faCircleChevronRight}
        class="fa-arrow"
        color="#fcb900"
      />
    </li>
    <li class="druglist">
      Selpercatinib<Fa
        icon={faCircleChevronRight}
        class="fa-arrow"
        color="#fcb900"
      />
    </li>
  </ul>
  <div class="table-container">
    <table>
      <thead>
        <th class="th-variant">Variant</th>
        <th class="th-variant">HGVS</th>
        <th class="th-significance">MGeND</th>
        <th class="th-significance">ClinVar</th>
        <th class="th-calculation">Calculation</th>
        <th class="th-heatmap">Indicator1</th>
        <th class="th-heatmap">Indicator2</th>
        <th class="th-heatmap">Indicator3</th>
        <th class="th-heatmap">Indicator4</th>
        <th class="th-heatmap">Indicator5</th>
        <th class="th-heatmap">Indicator6</th>
      </thead>
      <tr>
        <td class="td-variant"
          >I1116L<Fa
            icon={faCircleChevronRight}
            class="fa-arrow"
            color="#5fdede"
          /></td
        >
        <td>ENST00000256078:8:c.35G>T <br />ENST00000256078:8:p.Gly12Cys</td>
        <td>Pathogenic</td>
        <td>Pathogenic</td>
        <td class="calculation"
          ><img
            class="drug-icon"
            src={drugIcon}
            alt="drug icon"
          />MutationFEP<Fa
            icon={faCircleChevronRight}
            class="fa-arrow"
            color="#fcb900"
          /></td
        >
        <td class="cell-td"><div class="cell" /></td>

        <td class="cell-td"><div class="cell" /></td>
      </tr>
      <tr>
        <td class="td-variant"
          >I116T<Fa
            icon={faCircleChevronRight}
            class="fa-arrow"
            color="#5fdede"
          /></td
        >
        <td
          >ENST00000256078:8:c.35G>C <br />
          ENST00000256078:8:p.Gly12Arg</td
        >
        <td>not provided</td>
        <td>not provided</td>
        <td><span class="cell" /><span class="cell" /></td>
        <td><span class="cell" /><span class="cell" /></td>
        <td><span class="cell" /><span class="cell" /></td>
        <td><span class="cell" /><span class="cell" /></td>
        <td><span class="cell" /><span class="cell" /></td>
      </tr>
      <tr>
        <td class="td-variant"
          >T117N<Fa
            icon={faCircleChevronRight}
            class="fa-arrow"
            color="#5fdede"
          /></td
        >
        <td
          >ENST00000256078:8:c.35G>A<br />
          ENST00000256078:8:p.Gly12Ser</td
        >
        <td>Pathogenic</td>
        <td>Pathogenic</td>
        <td class="calculation"
          ><img
            class="protein-icon"
            src={proteinIcon}
            alt="protein icon"
          />Other calculation<Fa
            icon={faCircleChevronRight}
            class="fa-arrow"
            color="#fcb900"
          /></td
        >
        <td><span class="cell" /><span class="cell" /></td>
        <td><span class="cell" /><span class="cell" /></td>
        <td><span class="cell" /><span class="cell" /></td>
        <td><span class="cell" /><span class="cell" /></td>
        <td><span class="cell" /><span class="cell" /></td>
      </tr>
    </table>
  </div>
</div>
