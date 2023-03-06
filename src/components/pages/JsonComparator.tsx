import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { generateDiffs } from "../../helpers/generateDiffs";
import { deepClone } from "../../helpers/objectHelpers";
import {
  Diffs,
  InputChangeEvent,
  JsonForm,
  JsonForms,
} from "../../types/types";
import JsonDiff from "../JsonDiff";
import NewJsonForm from "../NewJsonForm";

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

  const handleFormChange = (index: number, event: InputChangeEvent) => {
    let data = [...inputFields];
    const inputValueKey = event.target.name as keyof JsonForm;
    data[index][inputValueKey] = event.target.value;
    setInputFields(data);
  };

  const parseJsonsFromInputFields = (inputFields: JsonForms) => {
    return inputFields.map((input) => {
      const parsedContent = JSON.parse(input.content);
      return {
        name: input.name,
        content: parsedContent,
      };
    });
  };

  const createJsonForms = () => {
    return inputFields.map((input, index) => {
      return (
        <NewJsonForm
          key={index}
          index={index}
          values={input}
          onChange={handleFormChange}
        />
      );
    });
  };

  return (
    <Box sx={{ backgroundColor: "#f7f7f7", p: 3 }}>
      <h3>JSON Comparator</h3>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"start"}
      >
        <Box flex={1} display={"flex"} flexDirection={"column"}>
          {createJsonForms()}
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={150}
          width={150}
          margin={"0rem 5rem"}
          justifyContent={"space-around"}
        >
          <Button
            color="success"
            variant="contained"
            onClick={handleAddButtonClick}
            startIcon={<AddIcon />}
          >
            Add JSON
          </Button>
          <Button variant="contained" onClick={handleCompareButtonClick}>
            Compare
          </Button>
        </Box>
        <JsonDiff diffs={diffs} />
      </Box>
    </Box>
  );
};

export default JsonComparator;
