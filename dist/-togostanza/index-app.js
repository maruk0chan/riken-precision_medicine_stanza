import { d as defineComponent, s as script$1, c as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createElementBlock, F as Fragment, b as renderList, e as createBaseVNode, t as toDisplayString, f as createCommentVNode, g as createApp } from './Layout-f55999b1.js';

var script = defineComponent({
  components: {
    Layout: script$1
  },

  props: ['allMetadata'],

  setup(props) {
    return props;
  }
});

const _hoisted_1 = /*#__PURE__*/createBaseVNode("h1", { class: "display-4" }, "List of Stanzas", -1 /* HOISTED */);
const _hoisted_2 = {
  key: 0,
  class: "list-group mt-3"
};
const _hoisted_3 = ["href"];
const _hoisted_4 = {
  key: 0,
  class: "small text-muted text-truncate mt-1 mb-0"
};
const _hoisted_5 = { key: 1 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");

  return (openBlock(), createBlock(_component_Layout, null, {
    default: withCtx(() => [
      _hoisted_1,
      (_ctx.allMetadata.length > 0)
        ? (openBlock(), createElementBlock("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.allMetadata, (metadata) => {
              return (openBlock(), createElementBlock("a", {
                key: metadata['@id'],
                href: `./${metadata['@id']}.html`,
                class: "list-group-item list-group-item-action py-3"
              }, [
                createBaseVNode("div", null, toDisplayString(metadata['stanza:label']), 1 /* TEXT */),
                (metadata['stanza:definition'])
                  ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(metadata['stanza:definition']), 1 /* TEXT */))
                  : createCommentVNode("v-if", true)
              ], 8 /* PROPS */, _hoisted_3))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : (openBlock(), createElementBlock("p", _hoisted_5, "No stanzas defined."))
    ]),
    _: 1 /* STABLE */
  }))
}

script.render = render;
script.__file = "node_modules/togostanza/src/components/Index.vue";

var allMetadata = [{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"heatmap-table","stanza:label":"Heatmap table","stanza:definition":"For PrecisionMD-DB","stanza:license":"MIT","stanza:author":"PENQE","stanza:contributor":["Yukiko Noda"],"stanza:created":"2023-03-16","stanza:updated":"2023-03-16","stanza:parameter":[{"stanza:key":"data-url","stanza:example":"https://raw.githubusercontent.com/YukikoNoda/precision-medicine/feature/heatmap-table/assets/sample.json","stanza:description":"Data source URL","stanza:required":true},{"stanza:key":"data-gene","stanza:example":"","stanza:description":"Gene ID"}],"stanza:menu-placement":"bottom-right","stanza:style":[{"stanza:key":"--togostanza-canvas-height","stanza:type":"number","stanza:default":350,"stanza:description":"Canvas height"},{"stanza:key":"--togostanza-theme-background_color","stanza:type":"color","stanza:default":"#11435c","stanza:description":"Background color"},{"stanza:key":"--togostanza-fonts-font_family","stanza:type":"text","stanza:default":"Helvetica Neue, Arial, sans-serif","stanza:description":"Font family"},{"stanza:key":"--togostanza-fonts-font_color","stanza:type":"color","stanza:default":"#ffffff","stanza:description":"Text color"},{"stanza:key":"--togostanza-fonts-font_size_primary","stanza:type":"number","stanza:default":14,"stanza:description":"Primary font size"},{"stanza:key":"--togostanza-fonts-font_align","stanza:type":"single-choice","stanza:choice":["left","center","right"],"stanza:default":"center","stanza:description":"text align of greeting"}],"stanza:incomingEvent":[],"stanza:outgoingEvent":[]}];

createApp(script, {allMetadata}).mount('body');
//# sourceMappingURL=index-app.js.map
