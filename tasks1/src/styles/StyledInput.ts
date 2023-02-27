import { styled } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";

export const StyledInput = styled(TextField)({
  margin: "7px 0",

  "& label, label.Mui-focused": {
    color: "#FF7F00",
  },

  "& .MuiInput-root": {
    color: "#FF7F00",
  },

  "& .MuiInput-underline:after": {
    borderBottom: "3px solid #FF7F0055",
  },
});
