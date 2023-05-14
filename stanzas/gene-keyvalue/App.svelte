<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

  let gene = [
    {
      assembly: "",
      chromosome: "",
      position: "",
    },
  ];
  $: geneList = [
    { key: "Symbol", value: "" },
    { key: "Assembly", value: gene[0].assembly },
    { key: "Chromosome", value: gene[0].chromosome },
    { key: "Position", value: gene[0].position },
  ];

  // TODO: use this after api is okay
  // const handleFetchRequestDone = () => {
  //   console.log("fetchRequestDone");

  //   const response = window.$fetchedData;
  //   gene = response.gene
  // };
  // window.addEventListener("fetchRequestDone", handleFetchRequestDone);

  // TODO: use this after api is not okay
  // simulate api response
  setTimeout(() => {
    gene = [
      {
        assembly: "hg38",
        chromosome: "chr1",
        position: "123456",
      },
    ];
  }, 1000);
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
            {value ? value : "Loading..."}
          {/if}
        </td>
      </tr>
    {/each}
  </table>
</div>
