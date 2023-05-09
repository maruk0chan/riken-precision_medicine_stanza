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

  let calculatedResults = [
    {
      calculation_type: "Mutation_FEP",
      figure: [
        {
          Compound_ID: "Alectinib",
          FE_Bind: -0.177,
        },
        {
          Compound_ID: "Alectinib",
          FE_Bind: 0.154,
        },
        {
          Compound_ID: "Alectinib",
          FE_Bind: -0.101,
        },
      ],
      values: [
        {
          calculation: "Mutation_FEP",
          drug: "Alectinib",
          mean: -0.0413,
          sd: 0.1734,
        },
      ],
    },
  ];
  const handleFetchRequestDone = () => {
    console.log("fetchRequestDone");

    const response = window.$fetchedData;
    calculatedResults = response.calculated_results;
  };
  window.addEventListener("fetchRequestDone", handleFetchRequestDone);
</script>

<div class="calculation-keyvalue">
  <h3 class="h3 title">Caliculation results</h3>
  {#if !!calculatedResults}
    {calculatedResults[0].calculation_type}
  {/if}
  {#each calcList as { title, src, alt }}
    <div class="wrapper">
      <div class="left">
        <h4 class="h4 title">
          <img {src} {alt} />
          {title}
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
                <td
                  ><span
                    >{drug}
                    <Fa
                      icon={faCircleChevronRight}
                      size="70%"
                      color="#fcb900"
                    /></span
                  ></td
                >
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
