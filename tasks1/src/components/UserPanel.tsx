import EditLocationIcon from "@mui/icons-material/EditLocation";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { StyledButton } from "../styles/StyledButton";
import { StyledInput } from "../styles/StyledInput";
import {
  StyledPanel,
  StyledPanelDetails,
  StyledPanelSummary,
} from "../styles/StyledPanel";
import PasswordInput from "./PasswordInput";

const UserPanel = () => {
  return (
    <StyledPanel square={true}>
      <StyledPanelSummary
        expandIcon={
          <StyledButton
            variant="outlined"
            disableRipple={true}
            startIcon={<EditLocationIcon />}
          >
            CHANGE
          </StyledButton>
        }
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography fontWeight="fontWeightBold">Personal data</Typography>
      </StyledPanelSummary>
      <StyledPanelDetails>
        <StyledInput
          id="standard-name-input"
          label="Name"
          placeholder="Enter your first name"
          autoComplete="given-name"
          variant="standard"
        />
        <StyledInput
          id="standard-email-input"
          label="Email"
          type="email"
          placeholder="Enter an email"
          autoComplete="email"
          variant="standard"
        />
        <PasswordInput />
        <StyledButton
          type="submit"
          variant="text"
          disableRipple={true}
          sx={{ mt: 3 }}
        >
          SAVE
        </StyledButton>
      </StyledPanelDetails>
    </StyledPanel>
  );
};

export default UserPanel;
