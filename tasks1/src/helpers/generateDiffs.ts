import { JsonForms, ObjectKeys } from "./../types/types";
import { deepClone, isObject } from "./objectHelpers";

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

const compareObjectsKeys = (object1: {}, object2: {}) => {
  const object1Keys: ObjectKeys = getAllKeys(object1);
  const object2Keys: ObjectKeys = getAllKeys(object2);

  const missingKeys = getMissingKeys(object1Keys, object2Keys);

  return removeLeadingDots(missingKeys);
};

const getAllKeys = (object: any, keyPath: string = "") => {
  const nestedKeys = Object.keys(object).map((key) => {
    let keys: ObjectKeys = [];
    const newKey = `${keyPath}.${key}`;
    if (isObject(object[key])) {
      keys = getAllKeys(object[key], newKey);
    } else if (Array.isArray(object[key])) {
      object[key].forEach((value: any) => {
        if (Array.isArray(value) || isObject(value)) {
          keys = getAllKeys(value, newKey);
        }
      });
    }
    keys.push(newKey);
    return [...keys];
  });
  return nestedKeys.flat();
};

const getMissingKeys = (object1Keys: ObjectKeys, object2Keys: ObjectKeys) => {
  object2Keys.forEach((keyOfObject2) => {
    const index = object1Keys.indexOf(keyOfObject2);
    if (index >= 0) {
      object1Keys.splice(index, 1);
    }
  });
  return object1Keys;
};

const removeLeadingDots = (objectKeys: ObjectKeys) =>
  objectKeys.map((key) => key.replace(".", ""));
