export const arrowTheme = {
  secondaryOpacity: 1,
  primaryColor: "#000",
  size: "90%",
};

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
    default:
      return {
        className: "protein-icon",
        src: proteinIcon,
        alt: "protein icon",
      };
  }
};

export const scores = [
  "caddRawRankscore",
  "fathmmMklCodingRankscore",
  "lrtConvertedRankscore",
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
  { className: "th-calc th-group", label: "ΔΔG(kcal/mol)" },
  { className: "th-heatmap", label: "CADD" },
  { className: "th-heatmap", label: "fathmm-MKL" },
  { className: "th-heatmap", label: "LRT" },
  { className: "th-heatmap", label: "MutationTaster" },
  { className: "th-heatmap", label: "MutationAssessor" },
  { className: "th-heatmap", label: "Polyphen2_HDIV" },
  { className: "th-heatmap", label: "Polyphen2_HVAR" },
  { className: "th-heatmap", label: "PrimateAI" },
  { className: "th-heatmap", label: "PROVEAN" },
  { className: "th-heatmap", label: "REVEL" },
  { className: "th-heatmap", label: "SIFT4G" },
];
