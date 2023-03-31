export const arrowTheme = {
  secondaryOpacity: 1,
  primaryColor: "transparent",
  size: "90%",
};

const drugIcon =
  "https://raw.githubusercontent.com/YukikoNoda/precision-medicine/main/assets/drug.png";
const proteinIcon =
  "https://raw.githubusercontent.com/YukikoNoda/precision-medicine/main/assets/protein.png";
export const calculationType = (dataType) => {
  switch (dataType) {
    case "variants":
      return {
        calcName: "variants",
      };
    case "Mutation_FEP":
    case "Mutation_FE":
      return {
        calcName: "mutation",
        className: "drug-icon",
        src: drugIcon,
        alt: "drug icon",
      };
    default:
      return {
        calcName: "protein",
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
