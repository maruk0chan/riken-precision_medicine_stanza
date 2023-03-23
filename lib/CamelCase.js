import { camelCase } from "lodash";

export default function toCamelCase(data) {
  const camelCaseProperty = {};
  Object.entries(data).forEach(([key, value]) => {
    camelCaseProperty[camelCase(key)] = value;
  });
  return camelCaseProperty;
}
