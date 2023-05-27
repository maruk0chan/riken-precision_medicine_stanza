<script>
  import Fa from "svelte-fa";
  import {
    faCircleChevronRight,
    faTriangleExclamation,
  } from "@fortawesome/free-solid-svg-icons";
  export let assembly, isPosition, term;
  const grch = `GRCh${assembly.replace(/\D/g, "")}`;
  let promise = search(term);

  const drugIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/drug.png";
  const proteinIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/protein.png";

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
        <th class="th-variant">Name</th>
        <th class="th-disease">MGeND Significance</th>
        <th class="th-disease">ClinVar Significance</th>
        <th class="th-calc">Calculated</th>
      </tr>
    </thead>
    <tbody>
      {#await promise}
        <tr><td colspan="10">Loading...</td></tr>
      {:then dataset}
        {#each dataset.data as { chr, variant, MGeND_ClinicalSignificance, ClinVar_ClinicalSignificance, calculation_type, end, start, alt, ref }}
          <tr>
            <td
              ><a
                href={`${
                  window.location.origin
                }/dev/variants/details?assembly=${assembly}&chr=${
                  chr ? chr : "chr2"
                }&start=${start}&end=${end}&alt=${alt}&ref=${ref}&variant=${variant}`}
              >
                {`
                ${grch}${chr ? `_${chr}` : ""}
                ${start ? `_${start}` : ""}
                ${end ? `_${end}` : ""}
                ${alt ? `_${alt}` : ""}
                ${ref ? `_${ref}` : ""}
                ${variant ? `_${variant}` : ""}
                `}
                <Fa
                  icon={faCircleChevronRight}
                  size="90%"
                  color="var(--variant-color)"
                />
              </a>
            </td>
            <td>
              {MGeND_ClinicalSignificance[0] === ""
                ? "-"
                : MGeND_ClinicalSignificance}</td
            >
            <td
              >{ClinVar_ClinicalSignificance[0] === ""
                ? "-"
                : ClinVar_ClinicalSignificance}</td
            >
            <td
              >{#if calculation_type === "Mutation_FEP"}
                <a href={`${window.location.origin}/dev/calculation/details/`}>
                  <img src={drugIcon} alt="drug" />
                </a>
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
