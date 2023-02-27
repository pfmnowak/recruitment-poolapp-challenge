import EditLocationIcon from "@mui/icons-material/EditLocation";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputAdornment } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { StyledButton, StyledIconButton } from "../styles/StyledButton";
import { StyledInput } from "../styles/StyledInput";
import {
  StyledPanel,
  StyledPanelDetails,
  StyledPanelSummary,
} from "../styles/StyledPanel";

const UserPanel = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
        <StyledInput
          id="standard-password-input"
          label="Password"
          placeholder="Enter a password"
          autoComplete="new-password"
          variant="standard"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <StyledIconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  disableRipple={true}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </StyledIconButton>
              </InputAdornment>
            ),
          }}
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
