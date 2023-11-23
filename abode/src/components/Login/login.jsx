import { useState } from "react";
import { Grid, Paper, TextField } from "@mui/material";
import React from "react";
import logo from "../../logo/abode.jpg";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const cardStyle = {
    padding: 20,
    height: "60vh",
    width: 380,
    margin: "8% auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const textFieldStyle = { margin: "20px 0", width: "100%" };

  const buttonStyle = {
    width: 100,
    margin: "50px ",
    backgroundColor: "#281cc9",
    color: "white",
    "&:hover": {
      backgroundColor: "#1a0f7c",
    },
  };

  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://localhost:7282/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
       
        console.log("Inicio de sesión exitoso");

        history.push("/home");
      } else {
        // Manejar el caso en que las credenciales sean incorrectas u ocurra otro error
        console.error("Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error de red al intentar iniciar sesión", error);
    }
  };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} style={cardStyle}>
        <Grid container justifyContent="center">
          <img src={logo} alt="abode-logo" />
        </Grid>
        <TextField
          label="Username"
          style={textFieldStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          style={textFieldStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={handleLogin}
        >
          Sign in
        </Button>

        <Link to="/home">Create an account</Link>
      </Paper>
    </Grid>
  );
};

export default Login;
