import { JsonForms } from "./../types/types";

export const parseJsonsFromInputFields = (inputFields: JsonForms) => {
  return inputFields.map((input) => {
    const parsedContent = JSON.parse(input.content);
    return {
      name: input.name,
      content: parsedContent,
    };
  });
};
