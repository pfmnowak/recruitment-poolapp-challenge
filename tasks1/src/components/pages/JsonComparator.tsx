import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { deepClone } from "../../helpers/clone";
import { generateDiffs } from "../../helpers/generateDiffs";
import { parseJsonsFromInputFields } from "../../helpers/parseJsonsFromInputFields";
import { Diffs, JsonForm, JsonForms } from "../../types/types";
import JsonDiff from "../JsonDiff";

const JsonComparator = () => {
  const [inputFields, setInputFields] = useState<JsonForms>([]);
  const [diffs, setDiffs] = useState<Diffs>([]);

  const handleCompareButtonClick = () => {
    const inputFieldsCopy: JsonForms = deepClone(inputFields);
    let parsedInputFields = parseJsonsFromInputFields(inputFieldsCopy);

    const diffs = generateDiffs(parsedInputFields);
    setDiffs(diffs);
  };

  const handleAddButtonClick = () => {
    if (inputFields.length === 5) {
      return;
    }
    let newfield: JsonForm = { name: "", content: "" };
    setInputFields((prevInputFields) => [...prevInputFields, newfield]);
  };

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let data = [...inputFields];
    const inputValueKey = event.target.name as keyof JsonForm;
    data[index][inputValueKey] = event.target.value;
    setInputFields(data);
  };

  const createInputs = () => {
    return inputFields.map((input, index) => {
      return (
        <Box key={index}>
          <TextField
            id={`json-name-${index + 1}`}
            name="name"
            label={`JSON ${index + 1} name`}
            placeholder="Enter a name for this JSON"
            hiddenLabel={true}
            InputLabelProps={{ shrink: true }}
            value={input.name}
            onChange={(event) => handleFormChange(index, event)}
          />
          <br />
          <br />
          <TextField
            id={`json-content-${index + 1}`}
            name="content"
            label={`JSON ${index + 1} content`}
            placeholder="Enter your JSON here"
            multiline
            minRows={4}
            InputLabelProps={{ shrink: true }}
            value={input.content}
            onChange={(event) => handleFormChange(index, event)}
          />
        </Box>
      );
    });
  };

  return (
    <Box sx={{ backgroundColor: "#f7f7f7", p: 3 }}>
      <h3>JSON Comparator</h3>
      <Box display={"flex"} justifyContent={"center"} overflow-x={"auto"}>
        {createInputs()}
      </Box>
      <Button variant="contained" onClick={handleAddButtonClick}>
        Add JSON
      </Button>
      <br />
      <Button variant="contained" onClick={handleCompareButtonClick}>
        Compare
      </Button>
      <JsonDiff diffs={diffs} />
    </Box>
  );
};

export default JsonComparator;
