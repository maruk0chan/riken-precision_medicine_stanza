<script>
  const genomeList = [
    { key: "Symbol", value: "EGFR" },
    { key: "Assembly", value: "GRCh37" },
    { key: "Position", value: "7:55249071" },
  ];
</script>

<div class="genome-keyvalue">
  <h3 class="title">Variant Gene Information</h3>
  <table>
    {#each genomeList as { key, value }}
      <tr>
        <th>{key}</th>
        <td>{value}</td>
      </tr>
    {/each}
  </table>
</div>
