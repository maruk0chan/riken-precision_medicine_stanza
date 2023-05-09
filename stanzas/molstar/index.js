import Stanza from "togostanza/stanza";
import toCamelCase from "../../lib/CamelCase";
import App from "./App.svelte";

export default class Molstar extends Stanza {
  app = null;

  async render() {
    if (this.app) {
      this.root.querySelector("main > .molstar").remove();
    }
    this.app = new App({
      target: this.root.querySelector("main"),
      props: {
        molstar: toCamelCase(this.params)["stanzaMolstar"],
        root: this.root.querySelector("main"),
      },
    });
  }
}
