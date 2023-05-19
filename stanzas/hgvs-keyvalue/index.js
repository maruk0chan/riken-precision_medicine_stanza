import Stanza from "togostanza/stanza";
import App from "./App.svelte";

export default class HgvsKeyvalue extends Stanza {
  app = null;

  async render() {
    if (this.app) {
      this.root.querySelector("main > .heatmap-table").remove();
    }
    this.app = new App({
      target: this.root.querySelector("main"),
      props: {
        root: this.root.querySelector("main"),
      },
    });
  }
}
