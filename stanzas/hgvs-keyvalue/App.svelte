<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

  const hgvsKeys = [
    {
      genome: "RefSeq",
      transcript: "NM_05228:3c.2369C.T",
    },
    {
      genome: "Ensembl",
      transcript: "ENST000000275493.6:c.2369C.T",
    },
  ];

  let hgvs = [
    {
      genome: "ALK",
      index: "clinvar",
      transcript: ["NC_000002.12:g.29222591C>T"],
    },
    {
      genome: "ALK",
      index: "ensembl",
      transcript: ["ENST00000389048:c.3376G>A"],
    },
    {
      genome: "",
      index: "genbank",
      transcript: [""],
    },
  ];
  const handleFetchRequestDone = () => {
    console.log("fetchRequestDone");

    const response = window.$fetchedData;
    hgvs = response.hgvs;
  };
  window.addEventListener("fetchRequestDone", handleFetchRequestDone);
</script>

<div class="hgvs-keyvalue">
  <h3 class="title">HGVS Information</h3>
  {#if !!hgvs}
    {hgvs[0].genome}
  {/if}
  <table>
    <thead>
      <tr>
        <th colspan="2">Gene</th>
        <th>Transcript</th>
      </tr>
    </thead>
    <tbody>
      {#each hgvsKeys as { genome, transcript }}
        <tr>
          <th>{genome}</th>
          <td>
            <span>
              xxxx
              <Fa
                icon={faCircleChevronRight}
                size="90%"
                color="var(--variant-color)"
              />
            </span>
          </td>
          <td>{transcript}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
