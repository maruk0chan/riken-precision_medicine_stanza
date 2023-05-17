<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
  export let assembly, term;
  let promise = search(term);

  const drugIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/drug.png";
  const proteinIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/protein.png";

  async function search(geneName) {
    const response = await fetch(
      `https://precisionmd-db.med.kyoto-u.ac.jp/api/genes/search?assembly=${assembly}&genename=${geneName}&limit=300`
    );
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error(json);
    }
  }
</script>

<div class="search-gene">
  <table class="table">
    <thead>
      <tr>
        <th class="th-gene">Name</th>
        <th class="th-gene">Uniprot acc</th>
        <th class="th-calc">Calculated</th>
      </tr>
    </thead>
    <tbody>
      {#await promise}
        <tr><td>Loading...</td></tr>
      {:then dataset}
        {#each dataset.data as { genename, uniprot_acc, calculation_type }}
          <tr>
            <td
              ><a
                href={`https://precisionmd-db.med.kyoto-u.ac.jp/dev/genes/details?uniprot_acc=${uniprot_acc}&assembly=${assembly}&genename=${genename}`}
                >{genename}<Fa
                  icon={faCircleChevronRight}
                  size="90%"
                  color="var(--gene-color)"
                />
              </a></td
            >
            <td>{uniprot_acc}</td>
            <td
              >{#if calculation_type === "Mutation_FEP"}
                <img src={drugIcon} alt="drug" />
              {/if}
            </td>
          </tr>
        {/each}
      {:catch error}
        <tr
          ><td style="color: red"
            >Unable to fetch data from the server. Please refresh the page or
            try again later.{error.message}</td
          ></tr
        >
      {/await}
    </tbody>
  </table>
</div>
