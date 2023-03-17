<script>
  import metadata from "./metadata.json";
  import { camelCase } from "lodash";

  const params = metadata["stanza:parameter"].map((param) => {
    return {
      name: camelCase(param["stanza:key"]),
    };
  });
  console.log(params);
</script>

<table>
  <tr>
    <th>Variant</th>
    <th>HGVS</th>
    <th>MGeND</th>
    <th>ClinVar</th>
    <th>Calculation</th>
    <th>Indicator1</th>
    <th>Indicator2</th>
    <th>Indicator3</th>
    <th>Indicator4</th>
    <th>Indicator5</th>
    <th>Indicator6</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Me</td>
  </tr>
</table>

<style>
  table {
    border-collapse: collapse;
    white-space: nowrap;
  }
  tr {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
</style>
