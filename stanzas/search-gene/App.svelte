<script>
  import Fa from "svelte-fa";
  import {
    faCircleChevronRight,
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";
  export let assembly, defaultGene;

  const drugIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/drug.png";
  const proteinIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/protein.png";

  let dataset = {};
  async function search(geneName) {
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
  }

  let inputValue = defaultGene;
  let searchGene = defaultGene;
  search(defaultGene);
  function searchInput(event) {
    if (event.key === "Enter" && inputValue !== "") {
      searchGene = inputValue;
      search(searchGene);
    }
  }
  function searchButton() {
    if (inputValue !== "") {
      searchGene = inputValue;
      search(searchGene);
    }
  }
  // $: console.log("inputValue", inputValue);
  // $: console.log("searchGene", searchGene);
</script>

<div class="search-gene">
  <div class="search-field">
    <input
      placeholder="EFGR"
      bind:value={inputValue}
      on:keydown={searchInput}
    />
    <button on:click={searchButton}
      ><Fa icon={faMagnifyingGlass} color="#fff" /></button
    >
  </div>
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
              href={`${window.location.origin}/genes/details?uniprot_acc=${uniprot_acc}&assembly=${assembly}&genename=${genename}`}
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
