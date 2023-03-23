import Stanza from "togostanza/stanza";
import toCamelCase from "../../lib/CamelCase";
import App from "./App.svelte";

export default class HeatmapTable extends Stanza {
  app = null;

  async render() {
    if (!this.app) {
      this.app = new App({
        target: this.root.querySelector("main"),
        props: toCamelCase(this.params),
      });
    }
  }

  handleAttributeChange() {
    this.app?.$set(toCamelCase(this.params));
  }
}
