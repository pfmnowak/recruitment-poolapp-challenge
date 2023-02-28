import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

type jsonForms = jsonForm[];
type jsonForm = {
  name: string;
  content: string;
};

const JsonComparator = () => {
  const [inputFields, setInputFields] = useState<jsonForms>([]);

  const handleCompareButtonClick = () => {
    // const diff = compareObjectsKeys(json1, json2);
  };

  const handleAddButtonClick = () => {
    if (inputFields.length === 5) {
      return;
    }
    let newfield: jsonForm = { name: "", content: "" };
    setInputFields((prevInputFields) => [...prevInputFields, newfield]);
  };

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let data = [...inputFields];
    const inputValueKey = event.target.name as keyof jsonForm;
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
    <div>
      <h1>JSON Comparator</h1>
      <Box display={"flex"} justifyContent={"center"} overflow-x={"auto"}>
        {createInputs()}
      </Box>
      <Button variant="contained" onClick={handleAddButtonClick}>
        Add JSON
      </Button>
      <Button variant="contained" onClick={handleCompareButtonClick}>
        Compare
      </Button>
    </div>
  );
};

export default JsonComparator;
