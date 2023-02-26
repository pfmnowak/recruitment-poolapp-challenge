import EditLocationIcon from "@mui/icons-material/EditLocation";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { StyledButton } from "../styles/StyledButton";
import {
  StyledPanel,
  StyledPanelDetails,
  StyledPanelSummary,
} from "../styles/StyledPanel";

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
        <TextField
          id="standard-name-input"
          label="Name"
          placeholder="Enter your first name"
          autoComplete="given-name"
          variant="standard"
        />
        <TextField
          id="standard-email-input"
          label="Email"
          type="email"
          placeholder="Enter an email"
          autoComplete="email"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          placeholder="Enter a password"
          autoComplete="new-password"
          variant="standard"
        />
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
