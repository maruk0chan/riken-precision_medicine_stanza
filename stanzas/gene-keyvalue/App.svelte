<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
  const geneList = [
    { key: "Symbol", value: "" },
    { key: "Assembly", value: "" },
    { key: "Chromosome", value: "" },
    { key: "Position", value: "" },
  ];
  let response;
  let gene = {
    assembly: "",
    chromosome: "",
    position: "",
  };

  const handleFetchRequestDone = () => {
    console.log("fetchRequestDone");
    response = window.$fetchedData;
    gene = response.gene[0];
  };
  window.addEventListener("fetchRequestDone", handleFetchRequestDone);
</script>

<div class="gene-keyvalue">
  <h3 class="title">Gene Information</h3>
  {gene.assembly}
  {gene.chromosome}
  {gene.position}
  <table>
    {#each geneList as { key, value }, index}
      <tr>
        <th>{key}</th>
        <td>
          {#if index === 0}
            <span
              >{value}
              <Fa
                icon={faCircleChevronRight}
                size="90%"
                color="var(--gene-color)"
              />
            </span>
          {:else}
            {value}
          {/if}
        </td>
      </tr>
    {/each}
  </table>
</div>
