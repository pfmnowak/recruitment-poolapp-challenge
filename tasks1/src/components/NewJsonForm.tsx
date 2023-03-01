import { Box, TextField } from "@mui/material";
import React, { ReactNode } from "react";
import { InputChangeEvent, JsonForm } from "../types/types";

type JsonFormProps = {
  index: number;
  values: JsonForm;
  onChange: (index: number, event: InputChangeEvent) => void;
  children?: ReactNode;
};

const NewJsonForm = ({ index, values, onChange }: JsonFormProps) => {
  return (
    <Box key={index} display={"flex"} flexDirection={"column"} marginBottom={3}>
      <TextField
        id={`json-name-${index + 1}`}
        name="name"
        label={`JSON ${index + 1} name`}
        placeholder="Enter a name for this JSON"
        margin={"normal"}
        InputLabelProps={{ shrink: true }}
        value={values.name}
        onChange={(event) => onChange(index, event)}
      />
      <TextField
        id={`json-content-${index + 1}`}
        name="content"
        label={`JSON ${index + 1} content`}
        placeholder="Enter your JSON here"
        multiline
        minRows={4}
        maxRows={10}
        margin={"normal"}
        InputLabelProps={{ shrink: true }}
        value={values.content}
        onChange={(event) => onChange(index, event)}
      />
    </Box>
  );
};

export default NewJsonForm;
