import { useState } from "react";
import { Grid, Paper, TextField } from "@mui/material";
import React from "react";
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
    const cardStyle = {
        padding: 20,
        height: "60vh",
        width: 380,
        margin: "8% auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    const textFieldStyle = {
        margin: "20px 0",
        width: "100%",
    };

    const buttonStyle = {
        width: 300,
        margin: "50px ",
        backgroundColor: '#281cc9',
        color: 'white',
        '&:hover': {
            backgroundColor: '#1a0f7c',
        }
    };

    const history = useHistory();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            const response = await fetch("https://localhost:7282/api/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName: fullName,
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                // Manejar el éxito del registro
                console.log("Registro exitoso");
                // Redirigir a la página de inicio de sesión o a la página deseada
                history.push("/login");
            } else {
                // Manejar el caso en que el registro falle
                console.error("Error en el registro");
            }
        } catch (error) {
            console.error("Error de red al intentar registrarse", error);
        }
    };

    return (
        <Grid container justifyContent="center">
            <Paper elevation={10} style={cardStyle}>
                <Grid container justifyContent="center">
                    <h1>Create an account</h1>
                </Grid>
                <TextField
                    label="Full Name"
                    style={textFieldStyle}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <TextField
                    label="Email"
                    style={textFieldStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    style={textFieldStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" style={buttonStyle} onClick={handleSignup}>
                    Create Account
                </Button>
                <Link to="/login">Already have an account? Log in</Link>
            </Paper>
        </Grid>
    );
};

export default Signup;
