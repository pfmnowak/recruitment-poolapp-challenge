import { ObjectKeys } from "./../types/types";
import { getAllObjectKeys } from "./getAllObjectKeys";

export const compareObjectsKeys = (object1: {}, object2: {}) => {
  const object1Keys: ObjectKeys = [];
  const object2Keys: ObjectKeys = [];
  getAllObjectKeys(object1, object1Keys, "");
  getAllObjectKeys(object2, object2Keys, "");

  const missingKeys = getMissingKeys(object1Keys, object2Keys);

  return removeLeadingDots(missingKeys);
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
