import Stanza from "togostanza/stanza";
import camelCase from "lodash.camelcase";
import App from "./App.svelte";

function toCamelCase(params) {
  const camelCaseParams = {};
  Object.entries(params).forEach(([key, value]) => {
    camelCaseParams[camelCase(key)] = value;
  });
  return camelCaseParams;
}

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
