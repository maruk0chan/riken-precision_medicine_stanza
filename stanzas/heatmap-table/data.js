export const arrowTheme = {
  secondaryOpacity: 1,
  primaryColor: "#000",
  size: "90%",
};

export const columnLists = [
  {
    calc: "Mutation FEP",
    label: "Mutation FEP",
    num: 1234,
  },
  {
    calc: "Other Calculation",
    label: "Other Calculation 1",
    num: 1234,
  },
  {
    calc: "Other Calculation",
    label: "Other Calculation 2",
    num: 1234,
  },
  {
    calc: "Other Calculation",
    label: "Other Calculation 3",
    num: 1234,
  },
  {
    calc: "Other Calculation",
    label: "Other Calculation 4",
    num: 1234,
  },
  {
    calc: "Other Calculation",
    label: "Other Calculation 5",
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
    calc: "Mutation FEP",
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
    case "Mutation FEP":
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
