import svelte from "rollup-plugin-svelte";
// import sveltePreprocess from "svelte-preprocess";

export default function config() {
  return {
    rollup: {
      plugins: [
        svelte({
          emitCss: false,
          // preprocess,
        }),
      ],
    },
  };
}
