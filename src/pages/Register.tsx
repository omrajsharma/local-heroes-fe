import React from "react";
import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Container from "../components/atoms/Container";
import axios from "axios";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userType, setUserType] = React.useState("");

  const handleNameChange = (ev: any) => {
    setName(ev.target.value);
  };

  const handleEmailChange = (ev: any) => {
    setEmail(ev.target.value);
  };

  const handlePhoneChange = (ev: any) => {
    setPhone(ev.target.value);
  };

  const handleUsernameChange = (ev: any) => {
    console.log(ev.target.value);
    
    setUsername(ev.target.value);
  };

  const handlePasswordChange = (ev: any) => {
    setPassword(ev.target.value);
  };

  const handleUserTypeChange = (ev: any) => {
    setUserType(ev.target.value);
  };

  const handleSubmit = () => {
    // validation

    // api call
    try {
      axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/register`, {
        name ,
        email ,
        phone ,
        username ,
        password ,
        userType 
      })
      .then((res) => console.log(res))

    } catch (err) {
      console.log(err);
      
    }
  }

  return (
    <Container>
      <div style={{ display: "flex", height: "90vh" }}>
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
              Register User
            </Typography>
            <TextField
              style={{ marginBottom: "10px" }}
              type="text"
              id="standard-basic"
              label="Full Name"
              variant="standard"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              style={{ marginBottom: "10px" }}
              type="email"
              id="standard-basic"
              label="Email"
              variant="standard"
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              style={{ marginBottom: "10px" }}
              type="number"
              id="standard-basic"
              label="Phone No."
              variant="standard"
              value={phone}
              onChange={handlePhoneChange}
            />
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
            <FormLabel id="demo-controlled-radio-buttons-group">
              Signup As
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={userType}
              onChange={handleUserTypeChange}
              style={{ marginBottom: "10px" }}
            >
              <FormControlLabel
                value="PROVIDER"
                control={<Radio />}
                label="Provider"
              />
              <FormControlLabel
                value="CLIENT"
                control={<Radio />}
                label="Client"
              />
            </RadioGroup>
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
          </FormControl>
        </Card>
      </div>
    </Container>
  );
};

export default Register;
