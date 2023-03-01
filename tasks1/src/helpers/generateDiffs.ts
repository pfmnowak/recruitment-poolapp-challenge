import { JsonForms } from "./../types/types";
import { deepClone } from "./clone";
import { compareObjectsKeys } from "./compareObjectsKeys";

export const generateDiffs = (inputFields: JsonForms) => {
  return inputFields.map((input, index) => {
    let diff: string[] = [];
    let otherInputFields: JsonForms = deepClone(inputFields);

    otherInputFields.splice(index, 1);
    otherInputFields.forEach((inputToCompare) => {
      const newDiff = compareObjectsKeys(inputToCompare.content, input.content);
      diff = [...diff, ...newDiff];
    });

    return {
      name: input.name,
      diff: new Set(diff),
    };
  });
};
