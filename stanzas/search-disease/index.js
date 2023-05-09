import Stanza from "togostanza/stanza";
import toCamelCase from "../../lib/CamelCase";
import App from "./App.svelte";

export default class SearchDisease extends Stanza {
  app = null;

  async render() {
    if (this.app) {
      this.root.querySelector("main > .search-disease").remove();
    }
    this.app = new App({
      target: this.root.querySelector("main"),
      props: {
        assembly: toCamelCase(this.params)["stanzaAssembly"],
        defaultDisease: toCamelCase(this.params)["stanzaDisease"],
        root: this.root.querySelector("main"),
      },
    });
  }
}
