import { styled } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import { colorPrimary, colorPrimaryTransparent } from "./base";

export const StyledInput = styled(TextField)({
  margin: "7px 0",

  "& label, label.Mui-focused": {
    color: colorPrimary,
  },

  "& .MuiInput-root": {
    color: colorPrimary,
  },

  "& .MuiInput-underline:after": {
    borderBottom: `3px solid ${colorPrimaryTransparent}`,
  },
});
