import { Button, Card, FormControl, TextField, Typography } from "@mui/material"
import Container from "../components/atoms/Container"
import React from "react";
import apiCall from "../utils/apiUtils";
import API_ENUM from "../enum/API_ENUM";


const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (ev: any) => {
    setUsername(ev.target.value);
  };

  const handlePasswordChange = (ev: any) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = () => {
    apiCall(API_ENUM.LOGIN, {username, password});
  }

  return (
    <Container>
      <div style={{display: "flex", height: "90vh"}}>
        <Card
          variant="outlined"
          sx={{ padding: "10px", margin: "auto", minWidth: "360px" }}
        >
          <FormControl fullWidth>
            <Typography
              style={{
                marginBottom: "10px",
                borderBottom: "1px solid #cdcdcd",
                paddingBottom: "10px",
              }}
              variant="h5"
            >
              Login User
            </Typography>
            <TextField
              style={{ marginBottom: "10px" }}
              type="text"
              id="standard-basic"
              label="Username"
              variant="standard"
              value={username}
              onChange={handleUsernameChange}
            />
            <TextField
              style={{ marginBottom: "10px" }}
              type="password"
              id="standard-basic"
              label="Password"
              variant="standard"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button onClick={handleSubmit} variant="contained">Login</Button>
          </FormControl>
        </Card>
      </div>
    </Container>
  )
}

export default Login;
