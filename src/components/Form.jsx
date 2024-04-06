import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Typography } from "@mui/material";

const Form = ({
  title,
  buttonTitle,
  register,
}) => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = (event) => {
    event.preventDefault();
    register({ email, password: pass });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.03)",
        width: "300px",
        margin: "auto",
        padding: "70px",
      }}>
      <Typography variant="h2">{title}</Typography>
      <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
        <Input
          id="standard-adornment-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        onClick={handleSubmit}
        sx={{ m: 1, width: "35ch" }}
        variant="contained">
        {buttonTitle}
      </Button>
    </Box>
  );
};

export default Form;
