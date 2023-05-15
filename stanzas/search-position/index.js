import Stanza from "togostanza/stanza";
import toCamelCase from "../../lib/CamelCase";
import App from "./App.svelte";

export default class SearchPosition extends Stanza {
  app = null;

  async render() {
    if (this.app) {
      this.root.querySelector("main > .search-position").remove();
    }
    this.app = new App({
      target: this.root.querySelector("main"),
      props: {
        assembly: toCamelCase(this.params)["stanzaAssembly"],
        defaultPosition: toCamelCase(this.params)["stanzaTerm"],
        root: this.root.querySelector("main"),
      },
    });
  }
}
