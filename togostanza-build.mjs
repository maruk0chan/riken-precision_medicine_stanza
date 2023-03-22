import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
// import typescript from "@rollup/plugin-typescript";

export default function config() {
  return {
    rollup: {
      plugins: [
        // typescript({
        // tsconfig: "tsconfig.json",
        // sourceMap: true,
        // }),
        svelte({
          emitCss: false,
          preprocess: sveltePreprocess(),
        }),
      ],
    },
  };
}
