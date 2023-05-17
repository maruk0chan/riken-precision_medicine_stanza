<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
  export let assembly, isPosition, term;
  let promise = search(term);

  const drugIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/drug.png";
  const proteinIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/protein.png";

  console.log(isPosition);
  async function search(term) {
    let response;
    if (isPosition) {
      response = await fetch(
        `https://precisionmd-db.med.kyoto-u.ac.jp/api/positions/search?assembly=${assembly}&position=${term}`
      );
    } else {
      response = await fetch(
        `https://precisionmd-db.med.kyoto-u.ac.jp/api/variants/search?assembly=${assembly}&variant=${term}`
      );
    }
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error(json);
    }
  }
</script>

<div class="search-variant">
  <table class="table">
    <thead>
      <tr>
        <th rowspan="2">Name</th>
        <th colspan="3">HGVS</th>
        <th rowspan="2">MGeND Significance</th>
        <th rowspan="2">ClinVar Significance</th>
        <th rowspan="2">Calculated</th>
      </tr>
      <tr>
        <th>Ensembl_transcriptid</th>
        <th>GenBank</th>
        <th>ClinVar</th>
      </tr>
    </thead>
    <tbody>
      {#await promise}
        <tr><td>Loading...</td></tr>
      {:then dataset}
        {#each dataset.data as { variant, Ensembl_transcriptid, GenBank, clinvar_hgvs, MGeND_ClinicalSignificance, ClinVar_ClinicalSignificance, calculation_type, end, start }}
          <tr>
            <td
              ><a
                href={`https://precisionmd-db.med.kyoto-u.ac.jp/dev/variants/details?alt=T&assembly=hg38&chr=chr2&end=${end}&ref=C&start=${start}&variant=${variant}}`}
                >{variant}<Fa
                  icon={faCircleChevronRight}
                  size="90%"
                  color="var(--variant-color)"
                />
              </a></td
            >
            <td>{Ensembl_transcriptid}</td>
            <td>{GenBank}</td>
            <td>{clinvar_hgvs}</td>
            <td>{MGeND_ClinicalSignificance}</td>
            <td>{ClinVar_ClinicalSignificance}</td>
            <td
              >{#if calculation_type === "Mutation_FEP"}
                <img src={drugIcon} alt="drug" />
              {/if}
            </td>
          </tr>
        {/each}
        <!-- {:catch error}
        <tr><td style="color: red">{error.message}</td></tr> -->
      {/await}
    </tbody>
  </table>
</div>
