export const deepClone = (objectToClone: any) =>
  JSON.parse(JSON.stringify(objectToClone));
