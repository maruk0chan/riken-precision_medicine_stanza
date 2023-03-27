import { scaleLinear } from "d3-scale";

export default function getColor(value) {
  const colorRanges = ["lawngreen", "yellow", "red"];
  const colorDomains = [];
  for (let i = 0; i < colorRanges.length; i++) {
    colorDomains.push((1 / (colorRanges.length - 1)) * i);
  }
  const colorScale = scaleLinear()
    .domain(colorDomains)
    .range(colorRanges)
    .clamp(true)
    .unknown("#555");

  return colorScale(value);
}
