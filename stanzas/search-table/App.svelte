<script>
  import Fa from "svelte-fa";
  import {
    faCircleChevronRight,
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";

  const drugIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/drug.png";
  const proteinIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/protein.png";

  let inputValue = "";
  let searchValue = "";
  function clearInput(event) {
    if (event.key === "Enter" && inputValue !== "") {
      searchValue = inputValue;
      inputValue = "";
    }
  }
  function searchButton() {
    if (inputValue !== "") {
      searchValue = inputValue;
      inputValue = "";
    }
  }

  // $: console.log("inputValue", inputValue);
  // $: console.log("searchValue", searchValue);
</script>

<div class="search-table">
  <div class="search-field">
    <input placeholder="EFGR" bind:value={inputValue} on:keydown={clearInput} />
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
      <tr>
        <td
          ><span
            >AKT<Fa
              icon={faCircleChevronRight}
              size="90%"
              color="var(--gene-color)"
            />
          </span></td
        >
        <td>AKT</td>
        <td> <img src={drugIcon} alt="drug" /></td>
      </tr>
      <tr>
        <td
          ><span
            >AKT<Fa
              icon={faCircleChevronRight}
              size="90%"
              color="var(--gene-color)"
            />
          </span></td
        >
        <td>AKT</td>
        <td> <img src={proteinIcon} alt="protein-icon" /></td>
      </tr>
      <tr>
        <td
          ><span
            >AKT<Fa
              icon={faCircleChevronRight}
              size="90%"
              color="var(--gene-color)"
            />
          </span></td
        >
        <td>AKT</td>
        <td>
          <img src={drugIcon} alt="drug" /><img
            src={proteinIcon}
            alt="protein-icon"
          /></td
        >
      </tr>
    </tbody>
  </table>
</div>
