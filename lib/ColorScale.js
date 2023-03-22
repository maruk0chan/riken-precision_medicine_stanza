import { scaleLinear } from "d3-scale";

export default function ColorScale() {
  const colorRanges = [
    "#7bcc66",
    "#9fc83d",
    "#b0c629",
    "#c2c414",
    "#d4c200",
    "#d4ab05",
    "#d4940a",
    "#d47c0f",
    "#d46514",
    "#d44e19",
    "#CC2812",
  ];
  const colorDomains = [];
  for (let i = 0; i < colorRanges.length; i++) {
    colorDomains.push((100 / (colorRanges.length - 1)) * i);
  }
  return scaleLinear()
    .domain(colorDomains)
    .range(colorRanges)
    .clamp(true)
    .unknown("#555");
}
