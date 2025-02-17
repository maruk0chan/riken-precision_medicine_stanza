import { S as SvelteComponent, i as init, s as safe_not_equal, x as append_styles, y as empty, c as insert, n as noop, f as detach, z as svg_element, b as attr, A as toggle_class, d as append } from './index-e41a6caa.js';

const parseNumber = parseFloat;

function joinCss(obj, separator = ';') {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}

function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = '1em';
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = '-.125em';
  const overflow = 'visible';

  if (fw) {
    textAlign = 'center';
    width = '1.25em';
  }

  if (pull) {
    float = pull;
  }

  if (size) {
    if (size == 'lg') {
      fontSize = '1.33333em';
      lineHeight = '.75em';
      verticalAlign = '-.225em';
    } else if (size == 'xs') {
      fontSize = '.75em';
    } else if (size == 'sm') {
      fontSize = '.875em';
    } else {
      fontSize = size.replace('x', 'em');
    }
  }

  return joinCss([
    joinCss({
      float,
      width,
      height,
      'line-height': lineHeight,
      'font-size': fontSize,
      'text-align': textAlign,
      'vertical-align': verticalAlign,
      'transform-origin': 'center',
      overflow,
    }),
    style,
  ]);
}

function getTransform(
  scale,
  translateX,
  translateY,
  rotate,
  flip,
  translateTimes = 1,
  translateUnit = '',
  rotateUnit = '',
) {
  let flipX = 1;
  let flipY = 1;

  if (flip) {
    if (flip == 'horizontal') {
      flipX = -1;
    } else if (flip == 'vertical') {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }

  return joinCss(
    [
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`,
    ],
    ' ',
  );
}

/* node_modules/svelte-fa/src/fa.svelte generated by Svelte v3.58.0 */

function add_css(target) {
	append_styles(target, "svelte-1cj2gr0", ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}");
}

// (66:0) {#if i[4]}
function create_if_block(ctx) {
	let svg;
	let g1;
	let g0;
	let g1_transform_value;
	let g1_transform_origin_value;
	let svg_id_value;
	let svg_class_value;
	let svg_viewBox_value;

	function select_block_type(ctx, dirty) {
		if (typeof /*i*/ ctx[10][4] == 'string') return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	return {
		c() {
			svg = svg_element("svg");
			g1 = svg_element("g");
			g0 = svg_element("g");
			if_block.c();
			attr(g0, "transform", /*transform*/ ctx[12]);
			attr(g1, "transform", g1_transform_value = "translate(" + /*i*/ ctx[10][0] / 2 + " " + /*i*/ ctx[10][1] / 2 + ")");
			attr(g1, "transform-origin", g1_transform_origin_value = "" + (/*i*/ ctx[10][0] / 4 + " 0"));
			attr(svg, "id", svg_id_value = /*id*/ ctx[1] || undefined);
			attr(svg, "class", svg_class_value = "svelte-fa " + /*clazz*/ ctx[0] + " svelte-1cj2gr0");
			attr(svg, "style", /*s*/ ctx[11]);
			attr(svg, "viewBox", svg_viewBox_value = "0 0 " + /*i*/ ctx[10][0] + " " + /*i*/ ctx[10][1]);
			attr(svg, "aria-hidden", "true");
			attr(svg, "role", "img");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			toggle_class(svg, "pulse", /*pulse*/ ctx[4]);
			toggle_class(svg, "spin", /*spin*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, g1);
			append(g1, g0);
			if_block.m(g0, null);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(g0, null);
				}
			}

			if (dirty & /*transform*/ 4096) {
				attr(g0, "transform", /*transform*/ ctx[12]);
			}

			if (dirty & /*i*/ 1024 && g1_transform_value !== (g1_transform_value = "translate(" + /*i*/ ctx[10][0] / 2 + " " + /*i*/ ctx[10][1] / 2 + ")")) {
				attr(g1, "transform", g1_transform_value);
			}

			if (dirty & /*i*/ 1024 && g1_transform_origin_value !== (g1_transform_origin_value = "" + (/*i*/ ctx[10][0] / 4 + " 0"))) {
				attr(g1, "transform-origin", g1_transform_origin_value);
			}

			if (dirty & /*id*/ 2 && svg_id_value !== (svg_id_value = /*id*/ ctx[1] || undefined)) {
				attr(svg, "id", svg_id_value);
			}

			if (dirty & /*clazz*/ 1 && svg_class_value !== (svg_class_value = "svelte-fa " + /*clazz*/ ctx[0] + " svelte-1cj2gr0")) {
				attr(svg, "class", svg_class_value);
			}

			if (dirty & /*s*/ 2048) {
				attr(svg, "style", /*s*/ ctx[11]);
			}

			if (dirty & /*i*/ 1024 && svg_viewBox_value !== (svg_viewBox_value = "0 0 " + /*i*/ ctx[10][0] + " " + /*i*/ ctx[10][1])) {
				attr(svg, "viewBox", svg_viewBox_value);
			}

			if (dirty & /*clazz, pulse*/ 17) {
				toggle_class(svg, "pulse", /*pulse*/ ctx[4]);
			}

			if (dirty & /*clazz, spin*/ 9) {
				toggle_class(svg, "spin", /*spin*/ ctx[3]);
			}
		},
		d(detaching) {
			if (detaching) detach(svg);
			if_block.d();
		}
	};
}

// (89:8) {:else}
function create_else_block(ctx) {
	let path0;
	let path0_d_value;
	let path0_fill_value;
	let path0_fill_opacity_value;
	let path0_transform_value;
	let path1;
	let path1_d_value;
	let path1_fill_value;
	let path1_fill_opacity_value;
	let path1_transform_value;

	return {
		c() {
			path0 = svg_element("path");
			path1 = svg_element("path");
			attr(path0, "d", path0_d_value = /*i*/ ctx[10][4][0]);
			attr(path0, "fill", path0_fill_value = /*secondaryColor*/ ctx[6] || /*color*/ ctx[2] || 'currentColor');

			attr(path0, "fill-opacity", path0_fill_opacity_value = /*swapOpacity*/ ctx[9] != false
			? /*primaryOpacity*/ ctx[7]
			: /*secondaryOpacity*/ ctx[8]);

			attr(path0, "transform", path0_transform_value = "translate(" + /*i*/ ctx[10][0] / -2 + " " + /*i*/ ctx[10][1] / -2 + ")");
			attr(path1, "d", path1_d_value = /*i*/ ctx[10][4][1]);
			attr(path1, "fill", path1_fill_value = /*primaryColor*/ ctx[5] || /*color*/ ctx[2] || 'currentColor');

			attr(path1, "fill-opacity", path1_fill_opacity_value = /*swapOpacity*/ ctx[9] != false
			? /*secondaryOpacity*/ ctx[8]
			: /*primaryOpacity*/ ctx[7]);

			attr(path1, "transform", path1_transform_value = "translate(" + /*i*/ ctx[10][0] / -2 + " " + /*i*/ ctx[10][1] / -2 + ")");
		},
		m(target, anchor) {
			insert(target, path0, anchor);
			insert(target, path1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*i*/ 1024 && path0_d_value !== (path0_d_value = /*i*/ ctx[10][4][0])) {
				attr(path0, "d", path0_d_value);
			}

			if (dirty & /*secondaryColor, color*/ 68 && path0_fill_value !== (path0_fill_value = /*secondaryColor*/ ctx[6] || /*color*/ ctx[2] || 'currentColor')) {
				attr(path0, "fill", path0_fill_value);
			}

			if (dirty & /*swapOpacity, primaryOpacity, secondaryOpacity*/ 896 && path0_fill_opacity_value !== (path0_fill_opacity_value = /*swapOpacity*/ ctx[9] != false
			? /*primaryOpacity*/ ctx[7]
			: /*secondaryOpacity*/ ctx[8])) {
				attr(path0, "fill-opacity", path0_fill_opacity_value);
			}

			if (dirty & /*i*/ 1024 && path0_transform_value !== (path0_transform_value = "translate(" + /*i*/ ctx[10][0] / -2 + " " + /*i*/ ctx[10][1] / -2 + ")")) {
				attr(path0, "transform", path0_transform_value);
			}

			if (dirty & /*i*/ 1024 && path1_d_value !== (path1_d_value = /*i*/ ctx[10][4][1])) {
				attr(path1, "d", path1_d_value);
			}

			if (dirty & /*primaryColor, color*/ 36 && path1_fill_value !== (path1_fill_value = /*primaryColor*/ ctx[5] || /*color*/ ctx[2] || 'currentColor')) {
				attr(path1, "fill", path1_fill_value);
			}

			if (dirty & /*swapOpacity, secondaryOpacity, primaryOpacity*/ 896 && path1_fill_opacity_value !== (path1_fill_opacity_value = /*swapOpacity*/ ctx[9] != false
			? /*secondaryOpacity*/ ctx[8]
			: /*primaryOpacity*/ ctx[7])) {
				attr(path1, "fill-opacity", path1_fill_opacity_value);
			}

			if (dirty & /*i*/ 1024 && path1_transform_value !== (path1_transform_value = "translate(" + /*i*/ ctx[10][0] / -2 + " " + /*i*/ ctx[10][1] / -2 + ")")) {
				attr(path1, "transform", path1_transform_value);
			}
		},
		d(detaching) {
			if (detaching) detach(path0);
			if (detaching) detach(path1);
		}
	};
}

// (83:8) {#if typeof i[4] == 'string'}
function create_if_block_1(ctx) {
	let path;
	let path_d_value;
	let path_fill_value;
	let path_transform_value;

	return {
		c() {
			path = svg_element("path");
			attr(path, "d", path_d_value = /*i*/ ctx[10][4]);
			attr(path, "fill", path_fill_value = /*color*/ ctx[2] || /*primaryColor*/ ctx[5] || 'currentColor');
			attr(path, "transform", path_transform_value = "translate(" + /*i*/ ctx[10][0] / -2 + " " + /*i*/ ctx[10][1] / -2 + ")");
		},
		m(target, anchor) {
			insert(target, path, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*i*/ 1024 && path_d_value !== (path_d_value = /*i*/ ctx[10][4])) {
				attr(path, "d", path_d_value);
			}

			if (dirty & /*color, primaryColor*/ 36 && path_fill_value !== (path_fill_value = /*color*/ ctx[2] || /*primaryColor*/ ctx[5] || 'currentColor')) {
				attr(path, "fill", path_fill_value);
			}

			if (dirty & /*i*/ 1024 && path_transform_value !== (path_transform_value = "translate(" + /*i*/ ctx[10][0] / -2 + " " + /*i*/ ctx[10][1] / -2 + ")")) {
				attr(path, "transform", path_transform_value);
			}
		},
		d(detaching) {
			if (detaching) detach(path);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let if_block = /*i*/ ctx[10][4] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (/*i*/ ctx[10][4]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { class: clazz = '' } = $$props;
	let { id = '' } = $$props;
	let { style = '' } = $$props;
	let { icon } = $$props;
	let { size = '' } = $$props;
	let { color = '' } = $$props;
	let { fw = false } = $$props;
	let { pull = '' } = $$props;
	let { scale = 1 } = $$props;
	let { translateX = 0 } = $$props;
	let { translateY = 0 } = $$props;
	let { rotate = '' } = $$props;
	let { flip = false } = $$props;
	let { spin = false } = $$props;
	let { pulse = false } = $$props;
	let { primaryColor = '' } = $$props;
	let { secondaryColor = '' } = $$props;
	let { primaryOpacity = 1 } = $$props;
	let { secondaryOpacity = 0.4 } = $$props;
	let { swapOpacity = false } = $$props;
	let i;
	let s;
	let transform;

	$$self.$$set = $$props => {
		if ('class' in $$props) $$invalidate(0, clazz = $$props.class);
		if ('id' in $$props) $$invalidate(1, id = $$props.id);
		if ('style' in $$props) $$invalidate(13, style = $$props.style);
		if ('icon' in $$props) $$invalidate(14, icon = $$props.icon);
		if ('size' in $$props) $$invalidate(15, size = $$props.size);
		if ('color' in $$props) $$invalidate(2, color = $$props.color);
		if ('fw' in $$props) $$invalidate(16, fw = $$props.fw);
		if ('pull' in $$props) $$invalidate(17, pull = $$props.pull);
		if ('scale' in $$props) $$invalidate(18, scale = $$props.scale);
		if ('translateX' in $$props) $$invalidate(19, translateX = $$props.translateX);
		if ('translateY' in $$props) $$invalidate(20, translateY = $$props.translateY);
		if ('rotate' in $$props) $$invalidate(21, rotate = $$props.rotate);
		if ('flip' in $$props) $$invalidate(22, flip = $$props.flip);
		if ('spin' in $$props) $$invalidate(3, spin = $$props.spin);
		if ('pulse' in $$props) $$invalidate(4, pulse = $$props.pulse);
		if ('primaryColor' in $$props) $$invalidate(5, primaryColor = $$props.primaryColor);
		if ('secondaryColor' in $$props) $$invalidate(6, secondaryColor = $$props.secondaryColor);
		if ('primaryOpacity' in $$props) $$invalidate(7, primaryOpacity = $$props.primaryOpacity);
		if ('secondaryOpacity' in $$props) $$invalidate(8, secondaryOpacity = $$props.secondaryOpacity);
		if ('swapOpacity' in $$props) $$invalidate(9, swapOpacity = $$props.swapOpacity);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*icon*/ 16384) {
			$$invalidate(10, i = icon && icon.icon || [0, 0, '', [], '']);
		}

		if ($$self.$$.dirty & /*style, size, pull, fw*/ 237568) {
			$$invalidate(11, s = getStyles(style, size, pull, fw));
		}

		if ($$self.$$.dirty & /*scale, translateX, translateY, rotate, flip*/ 8126464) {
			$$invalidate(12, transform = getTransform(scale, translateX, translateY, rotate, flip, 512));
		}
	};

	return [
		clazz,
		id,
		color,
		spin,
		pulse,
		primaryColor,
		secondaryColor,
		primaryOpacity,
		secondaryOpacity,
		swapOpacity,
		i,
		s,
		transform,
		style,
		icon,
		size,
		fw,
		pull,
		scale,
		translateX,
		translateY,
		rotate,
		flip
	];
}

class Fa extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				class: 0,
				id: 1,
				style: 13,
				icon: 14,
				size: 15,
				color: 2,
				fw: 16,
				pull: 17,
				scale: 18,
				translateX: 19,
				translateY: 20,
				rotate: 21,
				flip: 22,
				spin: 3,
				pulse: 4,
				primaryColor: 5,
				secondaryColor: 6,
				primaryOpacity: 7,
				secondaryOpacity: 8,
				swapOpacity: 9
			},
			add_css
		);
	}
}

var faCircleChevronRight = {
  prefix: 'fas',
  iconName: 'circle-chevron-right',
  icon: [512, 512, ["chevron-circle-right"], "f138", "M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]
};
var faTriangleExclamation = {
  prefix: 'fas',
  iconName: 'triangle-exclamation',
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
};

export { Fa as F, faTriangleExclamation as a, faCircleChevronRight as f };
//# sourceMappingURL=index-97bbddfa.js.map
