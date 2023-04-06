<script>
  import Fa from "svelte-fa";
  import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
  const drugIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/drug.png";
  const proteinIcon =
    "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/protein.png";

  const calcList = [
    { title: "MutationFEP", src: drugIcon, alt: "drug icon" },
    {
      title: "Protein structure calculation",
      src: proteinIcon,
      alt: "protein icon",
    },
  ];
  const mutationTh = ["Drug", "AVE ΔΔG (kcal/mol)", "SD ΔΔG (kcal/mol)"];
  const mutationList = [
    { drug: "Cetuximab", ave: "xxx", sd: "xxx" },
    { drug: "Dasatinib", ave: "xxx", sd: "xxx" },
  ];
</script>

<div class="calculation-keyvalue">
  <h3 class="h3 title">Caliculation results</h3>

  {#each calcList as { title, src, alt }}
    <div class="wrapper">
      <div class="left">
        <h4 class="h4 title">
          <img {src} {alt} />
          {title}
          <Fa icon={faCircleChevronRight} size="70%" color="#fcb900" />
        </h4>
        <table class="table">
          <thead>
            <tr>
              {#each mutationTh as th}
                <th>{th}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each mutationList as { drug, ave, sd }}
              <tr>
                <td>{drug}</td>
                <td>{ave}</td>
                <td>{sd}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <div class="right">
        <div class="scatter-plot">Scatter plot area</div>
      </div>
    </div>
  {/each}
</div>
