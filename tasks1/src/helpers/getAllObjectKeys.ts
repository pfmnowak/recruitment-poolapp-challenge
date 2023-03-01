import { ObjectKeys } from "../types/types";

export const getAllObjectKeys = (
  object: any,
  arrayWithKeys: ObjectKeys,
  keyPath: string
) => {
  Object.keys(object).forEach(function (key) {
    if (Object.prototype.toString.call(object[key]) === "[object Object]") {
      getAllObjectKeys(object[key], arrayWithKeys, `${keyPath}.${key}`);
    } else if (Array.isArray(object[key])) {
      object[key].forEach(function (value: any) {
        if (
          Array.isArray(value) ||
          Object.prototype.toString.call(value) === "[object Object]"
        ) {
          getAllObjectKeys(value, arrayWithKeys, `${keyPath}.${key}`);
        }
      });
    }
    arrayWithKeys.push(`${keyPath}.${key}`);
  });
};
