import { Grid,Paper, TextField } from "@mui/material";
import React from "react";
import logo from "../../logo/abode.jpg"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "./styles.css"
const Login=()=>{
    const cardStyle={padding:20, height:"60vh",width:380, margin:"8% auto" ,display:"flex",flexDirection:"column",
alignItems:"center"}
    
  const textFieldStyle = {margin: "20px 0", width: "100%", };

  const buttonStyle = {width:100, margin:"50px ",backgroundColor: '#281cc9',
  color: 'white', '&:hover': {
    backgroundColor: '#1a0f7c', 
  }
  };
    return(
        <Grid container justifyContent="center">
            <Paper elevation={10} style={cardStyle}>
                <Grid container justifyContent="center">
                <img src={logo}  salt="abode-logo" />
                </Grid>
                <TextField label="Username"style={textFieldStyle}></TextField>
                <TextField label="Password" type="password" style={textFieldStyle}></TextField>
                <Button variant="contained"style={buttonStyle}>
                <Link className="link" to="/home">Sign in</Link>  </Button>
                
                <Link  to="/home">Create an account</Link>
            </Paper>
        </Grid>
    )
}
export default Login

