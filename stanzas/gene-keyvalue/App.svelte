<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
  const geneList = [
    { key: "Symbol", value: "" },
    { key: "Assembly", value: "" },
    { key: "Chromosome", value: "" },
    { key: "Position", value: "" },
  ];
  let gene = [
    {
      assembly: "",
      chromosome: "",
      position: "",
    },
  ];
  let assembly;
  let chromosome;
  let position;

  const handleFetchRequestDone = () => {
    console.log("fetchRequestDone");

    const response = window.$fetchedData;
    assembly = response.gene[0].assembly;
    chromosome = response.gene[0].chromosome;
    position = response.gene[0].position;
  };
  window.addEventListener("fetchRequestDone", handleFetchRequestDone);
</script>

<div class="gene-keyvalue">
  <h3 class="title">Gene Information</h3>
  {#if !!gene}
    <!-- {gene[0].assembly} -->
    assembly:{assembly}
    chromosome:{chromosome}
    position:{position}
  {/if}
  <table>
    {#each geneList as { key, value }, index}
      <tr>
        <th>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
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
