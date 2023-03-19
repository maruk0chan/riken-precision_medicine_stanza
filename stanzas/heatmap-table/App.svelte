<script>
  import metadata from "./metadata.json";
  import { camelCase } from "lodash";
  import Fa from "svelte-fa";
  import {
    faPrescriptionBottleMedical,
    faBacon,
  } from "@fortawesome/free-solid-svg-icons";

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
      <Fa icon={faPrescriptionBottleMedical} class="mutation-icon" />Mutation
      FEP<span class="num">123</span>
    </li>
    <li class="calc-list">
      <Fa icon={faBacon} class="calc-icon" />Other Calculation 1<span
        class="num">123</span
      >
    </li>
    <li class="calc-list">
      <Fa icon={faBacon} class="calc-icon" />Other Calculation 2<span
        class="num">123</span
      >
    </li>
    <li class="calc-list">
      <Fa icon={faBacon} class="calc-icon" />Other Calculation 3<span
        class="num">123</span
      >
    </li>
    <li class="calc-list">
      <Fa icon={faBacon} class="calc-icon" />Other Calculation 4<span
        class="num">123</span
      >
    </li>
    <li class="calc-list">
      <Fa icon={faBacon} class="calc-icon" />Other Calculation 5<span
        class="num">123</span
      >
    </li>
  </ul>
  <ul class="drugs">
    <li>Drugs</li>
    <li class="druglist">Gefitinib<span class="arrow" /></li>
    <li class="druglist">Elotinib<span class="arrow" /></li>
    <li class="druglist">Crizotinib<span class="arrow" /></li>
    <li class="druglist">Alectinib<span class="arrow" /></li>
    <li class="druglist">Lorlatinib<span class="arrow" /></li>
    <li class="druglist">Pralsetinib<span class="arrow" /></li>
    <li class="druglist">Selpercatinib<span class="arrow" /></li>
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
        <td class="td-variant">I1116L<span class="arrow" /></td>
        <td>ENST00000256078:8:c.35G>T <br />ENST00000256078:8:p.Gly12Cys</td>
        <td>Pathogenic</td>
        <td>Pathogenic</td>
        <td class="calculation"
          ><Fa
            icon={faPrescriptionBottleMedical}
            class="mutation-icon"
          />MutationFEP<span class="arrow" /></td
        >
      </tr>
      <tr>
        <td class="td-variant">I116T<span class="arrow" /></td>
        <td
          >ENST00000256078:8:c.35G>C <br />
          ENST00000256078:8:p.Gly12Arg</td
        >
        <td>not provided</td>
        <td>not provided</td>
        <td />
      </tr>
      <tr>
        <td class="td-variant">T117N<span class="arrow" /></td>
        <td
          >ENST00000256078:8:c.35G>A<br />
          ENST00000256078:8:p.Gly12Ser</td
        >
        <td>Pathogenic</td>
        <td>Pathogenic</td>
        <td class="calculation"
          ><Fa icon={faBacon} class="calc-icon" />Other calculation<span
            class="arrow"
          /></td
        >
      </tr>
    </table>
  </div>
</div>
