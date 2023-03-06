import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputAdornment } from "@mui/material";
import * as React from "react";
import { StyledIconButton } from "../styles/StyledButton";
import { StyledInput } from "../styles/StyledInput";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
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
  );
};

export default PasswordInput;
