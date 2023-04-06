<script>
  const genomeList = [
    { key: "Assembly", value: "GRCh37" },
    { key: "Chromosome", value: "7" },
    { key: "Position", value: "55249071" },
  ];
</script>

<div class="genome-keyvalue">
  <h3 class="title">Variant Genome Information</h3>
  <table>
    {#each genomeList as { key, value }}
      <tr>
        <th>{key}</th>
        <td>{value}</td>
      </tr>
    {/each}
  </table>
</div>
