export const arrowTheme = {
  secondaryOpacity: 1,
  primaryColor: "transparent",
  size: "90%",
};

const drugIcon =
  "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/drug.png";
const proteinIcon =
  "https://raw.githubusercontent.com/PENQEinc/riken-precision_medicine_stanza/main/assets/protein.png";
export const calculationType = (dataType) => {
  switch (dataType) {
    case "variants":
      return {
        calcName: "variants",
      };
    case "Mutation_FEP":
    case "Mutation_FEP1":
    case "Mutation_FEP2":
      return {
        calcName: "mutation",
        className: "drug-icon",
        src: drugIcon,
        alt: "drug icon",
      };
    default:
      return {
        calcName: "",
        // className: "protein-icon",
        // src: proteinIcon,
        // alt: "protein icon",
      };
      // return {
      //   calcName: "protein",
      //   className: "protein-icon",
      //   src: proteinIcon,
      //   alt: "protein icon",
      // };
  }
};

export const scores = [
  "caddRaw",
  "fathmmMklCoding",
  "lrtConverted",
  "mutationTasterConverted",
  "mutationAssessor",
  "polyphen2Hdiv",
  "polyphen2Hvar",
  "primateAi",
  "proveanConverted",
  "revel",
  "sift4GConverted",
];

export const scoreTheads = [
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
  { className: "th-heatmap", label: "SIFT4G" }
]