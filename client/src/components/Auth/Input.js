import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// this is the custom InputField:
const Input = ({
  half,
  name,
  label,
  handleChange,
  handleShowPassword,
  autoFocus,
  type,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      label={label}
      handleChange={handleChange}
      variant='outlined'
      required
      fullWidth
      autoFocus={autoFocus}
      type={type}
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  </Grid>
);

export default Input;
