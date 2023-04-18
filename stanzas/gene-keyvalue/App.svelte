<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
  const geneList = [
    { key: "Symbol", value: "EGFR" },
    { key: "Assembly", value: "GRCh37" },
    { key: "Position", value: "7:55249071" },
  ];
</script>

<div class="gene-keyvalue">
  <h3 class="title">Gene Information</h3>
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
