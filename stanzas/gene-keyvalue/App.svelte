<script>
  const geneList = [
    { key: "Symbol", value: "EGFR" },
    { key: "Assembly", value: "GRCh37" },
    { key: "Position", value: "7:55249071" },
  ];
</script>

<div class="gene-keyvalue">
  <h3 class="title">Gene Information</h3>
  <table>
    {#each geneList as { key, value }}
      <tr>
        <th>{key}</th>
        <td>{value}</td>
      </tr>
    {/each}
  </table>
</div>
