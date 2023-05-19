import Stanza from "togostanza/stanza";
import toCamelCase from "../../lib/CamelCase";
import App from "./App.svelte";

export default class GeneKeyvalue extends Stanza {
  app = null;

  async render() {
    if (this.app) {
      this.root.querySelector("main > .heatmap-table").remove();
    }
    this.app = new App({
      target: this.root.querySelector("main"),
      props: {
        term: toCamelCase(this.params)["stanzaTerm"],
        root: this.root.querySelector("main"),
      },
    });
  }
}
