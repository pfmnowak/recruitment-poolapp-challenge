import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  StyledPanel,
  StyledPanelDetails,
  StyledPanelSummary,
} from "../styles/StyledPanel";

const UserPanel = () => {
  return (
    <StyledPanel square={true}>
      <StyledPanelSummary
        expandIcon={<Button variant="outlined">CHANGE</Button>}
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
        <Button type="submit" variant="text">
          SAVE
        </Button>
      </StyledPanelDetails>
    </StyledPanel>
  );
};

export default UserPanel;
