import Stanza from "togostanza/stanza";
import toCamelCase from "../../lib/CamelCase";
import App from "./App.svelte";

export default class SearchVariant extends Stanza {
  app = null;

  async render() {
    if (this.app) {
      this.root.querySelector("main > .search-variant").remove();
    }
    this.app = new App({
      target: this.root.querySelector("main"),
      props: {
        assembly: toCamelCase(this.params)["stanzaAssembly"],
        defaultVariant: toCamelCase(this.params)["stanzaTerm"],
        root: this.root.querySelector("main"),
      },
    });
  }
}
