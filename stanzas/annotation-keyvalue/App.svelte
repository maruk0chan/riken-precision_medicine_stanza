<script>
  import getColor from "../../lib/ColorScale";
  import {
    annotationTh,
    annotationList,
    oncoKbTh,
    oncoKbList,
    oncoKbLevelList,
    predictionScoreTh,
    predictionScore,
  } from "./data.js";
  export let root;

  $: annotation = {
    default: [
      {
        diseases: [],
        index: "",
        number_of_variants: 0,
        significance: [],
      },
      {
        diseases: [],
        index: "",
        number_of_variants: 0,
        significance: [],
      },
    ],
    oncokb: [
      {
        mutation_effect: "",
        oncogenic: "",
      },
    ],
    prediction_score: [
      {
        CADD: 0,
        LRT: 0,
        MutationAssessor: 0,
        MutationTaster: 0,
        PROVEAN: 0,
        Polyphen2_HDIV: 0,
        Polyphen2_HVAR: 0,
        PrimateAI: 0,
        REVEL: 0,
        SIFT4G: 0,
        "fathmm-MKL": 0,
      },
    ],
  };
  // TODO: use this after api is not okay
  // simulate api response
  setTimeout(() => {
    annotation = {
      default: [
        {
          diseases: ["Neuroblastoma 3"],
          index: "clinvar",
          number_of_variants: 0,
          significance: ["Uncertain significance"],
        },
        {
          diseases: [""],
          index: "mgennd",
          number_of_variants: 0,
          significance: [""],
        },
      ],
      oncokb: [
        {
          mutation_effect: "",
          oncogenic: "",
        },
      ],
      prediction_score: [
        {
          CADD: 0.80477,
          LRT: 0.47681,
          MutationAssessor: 0.25572,
          MutationTaster: 0.81001,
          PROVEAN: 0.74051,
          Polyphen2_HDIV: 0.90584,
          Polyphen2_HVAR: 0.8317,
          PrimateAI: 0.74897,
          REVEL: 0.93266,
          SIFT4G: 0.92824,
          "fathmm-MKL": 0.89172,
        },
      ],
    };
  }, 1000);
  // const handleFetchRequestDone = () => {
  //   console.log("fetchRequestDone");

  //   const response = window.$fetchedData;
  //   annotation = response.annotation;
  // };
  // window.addEventListener("fetchRequestDone", handleFetchRequestDone);
</script>

<div class="annotation-keyvalue">
  <h3 class="h3 title">Annotation</h3>
  {#if !!annotation}
    <!-- {annotation.default[0].diseases} -->
  {/if}
  <table class="table">
    <thead>
      <tr>
        {#each annotationTh as th, index}
          <th colspan={index === 0 ? "2" : "0"}>{th}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each annotation.default as { index, significance, diseases, number_of_variants }}
        <tr>
          <th>{index}</th>
          <td>{significance}</td>
          <td>{diseases}</td>
          <td>{number_of_variants}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <h4 class="h4 title">OncoKB</h4>
  <table class="table">
    <thead>
      <tr>
        {#each oncoKbTh as th}
          <th>{th}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each annotation.oncokb as { mutation_effect, oncogenic }}
        <tr>
          <td>{oncogenic}</td>
          <td>{mutation_effect}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <h4 class="h4 title">Annotation</h4>
  <table class="table">
    <tbody>
      {#each oncoKbLevelList as { key, value }}
        <tr>
          <th>{key}</th>
          <td>{value}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <h4 class="h4 title">Prediction Score</h4>
  <table class="heatmap">
    <thead>
      <tr>
        {#each predictionScoreTh as th}
          <th class="th-heatmap"><p>{th}</p></th>
        {/each}
      </tr>
    </thead>
    <tbody>
      <tr>
        {#each predictionScore as score}
          <td class="cell-td">
            <div class="cell" style="background-color:{getColor(score)}" />
          </td>
        {/each}
      </tr>
    </tbody>
  </table>

  <div class="legend">
    <p>benign</p>
    <div class="legend-bar" />
    <p>pathogenic</p>
  </div>
</div>
