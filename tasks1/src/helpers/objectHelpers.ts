export const deepClone = (objectToClone: any) =>
  JSON.parse(JSON.stringify(objectToClone));

export const isObject = (value: any) =>
  Object.prototype.toString.call(value) === "[object Object]";
