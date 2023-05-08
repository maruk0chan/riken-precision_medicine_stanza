<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
  let searchParams = new URLSearchParams(window.location.search);
  const geneList = [];
  let response;
  let symbol = searchParams.get("genename");
  const handleFetchRequestDone = () => {
    console.log("fetchRequestDone");

    response = window.$fetchedData;
    const gene = response.gene[0];
    gene.symbol = symbol;

    for (const [key, value] of Object.entries(gene)) {
      geneList.push({ key, value });
    }
  };
  window.addEventListener("fetchRequestDone", handleFetchRequestDone);
</script>

<div class="gene-keyvalue">
  <h3 class="title">Gene Information</h3>
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
