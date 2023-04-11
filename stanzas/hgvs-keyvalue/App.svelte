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
