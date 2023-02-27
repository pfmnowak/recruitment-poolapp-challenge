import { styled } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { colorPrimaryLight } from "./base";

export const StyledPanel = styled(Accordion)({
  backgroundColor: colorPrimaryLight,
  width: "100%",
  maxWidth: "29rem",
  padding: "0.5rem 0",
});

export const StyledPanelSummary = styled(AccordionSummary)({
  ".MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
  },
});

export const StyledPanelDetails = styled(AccordionDetails)({
  display: "flex",
  flexDirection: "column",
});
