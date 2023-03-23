export const arrowTheme = {
  secondaryOpacity: 1,
  primaryColor: "#000",
  size: "90%",
};

export const columnLists = [
  {
    calc: "Mutation_FEP",
    label: "Mutation FEP",
    num: 1234,
  },
];

export const drugsLists = [
  "Elotinib",
  "Crizotinib",
  "Alectinib",
  "Lorlatinib",
  "Pralsetinib",
  "Selpercatinib",
];

export const tableLists = [
  {
    variant: "I1116L",
    hgvs: "ENST00000256078:8:c.35G>T ENST00000256078:8:p.Gly12Cys",
    mgend: "Pathogenic",
    clinvar: "Pathogenic",
    calc: "Mutation_FEP",
    heatmapValue1: 90,
    heatmapValue2: 70,
    heatmapValue3: 50,
    heatmapValue4: 40,
    heatmapValue5: 30,
    heatmapValue6: 10,
  },
  {
    variant: "I116T",
    hgvs: "ENST00000256078:8:c.35G>C ENST00000256078:8:p.Gly12Arg",
    mgend: "not provided",
    clinvar: "not provided",
    calc: "",
    heatmapValue1: 50,
    heatmapValue2: 90,
    heatmapValue3: 30,
    heatmapValue4: 10,
    heatmapValue5: 70,
    heatmapValue6: 50,
  },
  {
    variant: "T117N",
    hgvs: "ENST00000256078:8:c.35G>A ENST00000256078:8:p.Gly12Ser",
    mgend: "Pathogenic",
    clinvar: "Pathogenic",
    calc: "Other Calculation",
    heatmapValue1: 70,
    heatmapValue2: 40,
    heatmapValue3: 70,
    heatmapValue4: 30,
    heatmapValue5: 70,
    heatmapValue6: 10,
  },
];

const drugIcon = "../assets/drug.png";
const proteinIcon = "../assets/protein.png";
export const setIcon = (calcName) => {
  switch (calcName) {
    case "Mutation_FEP":
      return {
        className: "drug-icon",
        src: drugIcon,
        alt: "drug icon",
      };
    case "Other Calculation":
      return {
        className: "protein-icon",
        src: proteinIcon,
        alt: "protein icon",
      };
    default:
      return;
  }
};

export const scores = [
  "caddRawRankscore",
  "fathmmMklCodingRankscore",
  "lrtConvertedRankscore",
  "feBind",
  "mutationTasterConvertedRankscore",
  "mutationAssessorRankscore",
  "polyphen2HdivRankscore",
  "polyphen2HvarRankscore",
  "primateAiRankscore",
  "proveanConvertedRankscore",
  "revelRankscore",
  "sift4GConvertedRankscore",
];

export const theads = [
  { className: "th-gene", label: "UniPort ID" },
  { className: "th-variant", label: "Variant" },
  { className: "th-heatmap", label: "CADD" },
  { className: "th-heatmap", label: "fathmm-MKL" },
  { className: "th-heatmap", label: "LRT" },
  { className: "th-heatmap", label: "FE" },
  { className: "th-heatmap", label: "MutationTaster" },
  { className: "th-heatmap", label: "MutationAssessor" },
  { className: "th-heatmap", label: "Polyphen2_HDIV" },
  { className: "th-heatmap", label: "Polyphen2_HVAR" },
  { className: "th-heatmap", label: "PrimateAI" },
  { className: "th-heatmap", label: "PROVEAN" },
  { className: "th-heatmap", label: "REVEL" },
  { className: "th-heatmap", label: "SIFT4G" },
];
