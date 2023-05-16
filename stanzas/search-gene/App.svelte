<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
  export let assembly, term;

  const drugIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/drug.png";
  const proteinIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/protein.png";

  let dataset = {};
  (async (geneName) => {
    try {
      const response = await fetch(
        `https://precisionmd-db.med.kyoto-u.ac.jp/api/genes/search?assembly=${assembly}&genename=${geneName}&limit=30`
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

<div class="search-gene">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Uniprot acc</th>
        <th>Calculated</th>
      </tr>
    </thead>
    <tbody>
      {#each dataset as { genename, uniprot_acc, calculation_type }}
        <tr>
          <td
            ><a
              href={`${window.location.origin}/dev/genes/details?uniprot_acc=${uniprot_acc}&assembly=${assembly}&genename=${genename}`}
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
    </tbody>
  </table>
</div>
