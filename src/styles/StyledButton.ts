import { IconButton, styled } from "@mui/material";
import Button from "@mui/material/Button";
import { colorPrimary } from "./base";

export const StyledButton = styled(Button)({
  color: colorPrimary,
  transition: "0.2s all",

  ":hover": {
    backgroundColor: "#FFFFFF",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
  },

  ":active": {
    transform: "translateY(1.2px)",
  },

  "&.MuiButton-outlined": {
    border: `1px solid ${colorPrimary}`,
  },
});

export const StyledIconButton = styled(IconButton)({
  color: colorPrimary,
});
