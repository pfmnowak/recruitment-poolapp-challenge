import { getAllObjectKeys } from "./getAllObjectKeys";

export const compareObjectsKeys = (object1: {}, object2: {}) => {
  const object1Keys: string[] = [];
  const object2Keys: string[] = [];
  getAllObjectKeys(object1, object1Keys, "");
  getAllObjectKeys(object2, object2Keys, "");

  const missingKeys = getMissingKeys(object1Keys, object2Keys);

  return removeLeadingDots(missingKeys);
};

const getMissingKeys = (object1Keys: string[], object2Keys: string[]) => {
  object2Keys.forEach((keyOfObject2) => {
    object1Keys.splice(object1Keys.indexOf(keyOfObject2), 1);
  });
  return object1Keys;
};

const removeLeadingDots = (objectKeys: string[]) =>
  objectKeys.map((key) => key.replace(".", ""));
