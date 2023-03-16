import svelte from "rollup-plugin-svelte";

export default function config(development) {
  return {
    rollup: {
      plugins: [
        svelte({
          emitCss: false,
        }),
      ],
    },
  };
}