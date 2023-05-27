<script>
  import Fa from "svelte-fa";
  import {
    faCircleChevronRight,
    faTriangleExclamation,
  } from "@fortawesome/free-solid-svg-icons";
  export let assembly, term;
  let promise = search(term);

  const drugIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/drug.png";
  const proteinIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/protein.png";

  let dataset = {};
  async function search(disease) {
    const response = await fetch(
      `https://precisionmd-db.med.kyoto-u.ac.jp/api/positions/search?assembly=${assembly}&disease=${disease}`
    );
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error(json);
    }
  }
</script>

<div class="search-disease">
  <table class="table">
    <thead>
      <tr>
        <th class="th-disease">Name</th>
        <th class="th-gene">Gene</th>
        <th class="th-gene">UniProt acc</th>
        <th class="th-variant">Variant</th>
        <th class="th-disease">MGeND Significance</th>
        <th class="th-disease">ClinVar Significance</th>
        <th class="th-calc">Calculated</th>
      </tr>
    </thead>
    <tbody>
      {#await promise}
        <tr><td colspan="10">Loading...</td></tr>
      {:then dataset}
        {#each dataset.data as { ClinVar_DiseaseName, genename, uniprot_acc, variant, MGeND_ClinicalSignificance, ClinVar_ClinicalSignificance, calculation_type, assembly }}
          <tr>
            <td>{@html ClinVar_DiseaseName.join("<br>")}</td>
            <td
              ><a
                class="link-gene"
                href={`${window.location.origin}/dev//genes/details?uniprot_acc=${uniprot_acc}&assembly=${assembly}&genename=${genename}`}
                >{genename}<Fa
                  icon={faCircleChevronRight}
                  size="90%"
                  color="var(--gene-color)"
                />
              </a></td
            >
            <td> {uniprot_acc}</td>
            <td
              ><a
                class="link-variant"
                href={`${window.location.origin}/dev/variants/details?alt=T&assembly=${assembly}&chr=chr2&end=29222591&ref=C&start=29222591&variant=${variant}`}
                >{variant}<Fa
                  icon={faCircleChevronRight}
                  size="90%"
                  color="var(--variant-color)"
                />
              </a></td
            >
            <td>{MGeND_ClinicalSignificance}</td>
            <td>{ClinVar_ClinicalSignificance}</td>
            <td
              >{#if calculation_type === "Mutation_FEP"}
                <img src={drugIcon} alt="drug" />
              {/if}
            </td>
          </tr>
        {/each}
      {:catch error}
        <tr
          ><td class="error-message" colspan="10"
            ><Fa
              icon={faTriangleExclamation}
              size="90%"
              color="var(--warning-color)"
            />
            Unable to fetch data from the server. Please refresh the page or try
            again later.<br />
          </td></tr
        >
      {/await}
    </tbody>
  </table>
</div>
