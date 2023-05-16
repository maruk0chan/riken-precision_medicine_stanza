<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
  export let assembly, term;

  const drugIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/drug.png";
  const proteinIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/protein.png";

  let dataset = {};
  (async (position) => {
    try {
      const response = await fetch(
        `https://precisionmd-db.med.kyoto-u.ac.jp/api/positions/search?assembly=${assembly}&position=${position}`
      );
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json);
      }
      dataset = json.data;
    } catch (error) {
      console.error(error);
    }
  })(term);
</script>

<div class="search-position">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>HGVS</th>
        <th>GenBank</th>
        <th>MGeND Significance</th>
        <th>ClinVar Significance</th>
        <th>Calculated</th>
      </tr>
    </thead>
    <tbody>
      {#each dataset as { variant_id, Ensembl_transcriptid, GenBank, MGeND_ClinicalSignificance, ClinVar_ClinicalSignificance, calculation_type }}
        <tr>
          <td
            ><a
              href={`https://precisionmd-db.med.kyoto-u.ac.jp/api/variants/details?alt=T&assembly=hg38&chr=chr2&end=29222591&ref=C&start=29222591&variant=A1126T`}
              >{variant_id}<Fa
                icon={faCircleChevronRight}
                size="90%"
                color="var(--variant-color)"
              />
            </a></td
          >
          <td>{Ensembl_transcriptid}</td>
          <td>{GenBank}</td>
          <td>{MGeND_ClinicalSignificance}</td>
          <td>{ClinVar_ClinicalSignificance}</td>
          <td
            >{#if calculation_type === "Mutation_FEP"}
              <img src={drugIcon} alt="drug" />
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
