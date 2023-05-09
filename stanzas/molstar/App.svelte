<script>
  export let molstar;
  console.log(molstar);
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/babel-polyfill/dist/polyfill.min.js"
  ></script>

  <script
    src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-lite.js"
    charset="utf-8"
  ></script>

  <script
    src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
    charset="utf-8"
  ></script>

  <script
    type="text/javascript"
    src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-component-3.1.0.js"
  ></script>
</svelte:head>

<pdbe-molstar
  molecule-id={molstar}
  pdbe-link="false"
  hide-controls="true"
  hide-water="true"
  hide-het="true"
  bg-color-r="255"
  bg-color-g="255"
  bg-color-b="255"
/>
