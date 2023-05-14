<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

  $: hgvsKeys = [];
  // TODO: use this after api is not okay
  // simulate api response
  setTimeout(() => {
    hgvsKeys = [
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
  }, 1000);

  // TODO: use this after api is okay
  // const handleFetchRequestDone = () => {
  //   console.log("fetchRequestDone");

  //   const response = window.$fetchedData;
  //   hgvs = response.hgvs;
  // };
  // window.addEventListener("fetchRequestDone", handleFetchRequestDone);
</script>

<div class="hgvs-keyvalue">
  <h3 class="title">HGVS Information</h3>
  <table>
    <thead>
      <tr>
        <th colspan="2">Gene</th>
        <th>Transcript</th>
      </tr>
    </thead>
    <tbody>
      {#each hgvsKeys as { genome, index, transcript }}
        <tr>
          <th>{index}</th>
          <td>
            <span>
              {genome}
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
