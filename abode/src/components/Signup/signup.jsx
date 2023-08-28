import { Grid,Paper, TextField } from "@mui/material";
import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const  Signup=()=>{
    const cardStyle={padding:20, height:"60vh",width:380, margin:"8% auto" ,display:"flex",flexDirection:"column",
alignItems:"center"}
    
  const textFieldStyle = {margin: "20px 0", width: "100%", };

  const buttonStyle = {width:300, margin:"50px ",backgroundColor: '#281cc9',
  color: 'white', '&:hover': {
    backgroundColor: '#1a0f7c', 
  }
  };
    return(
        <Grid container justifyContent="center">
            <Paper elevation={10} style={cardStyle}>
                <Grid container justifyContent="center">
                <h1>Create an account</h1>

                </Grid>
                <TextField label="Full Name"style={textFieldStyle}></TextField>
                <TextField label="Email"style={textFieldStyle}></TextField> 
                <TextField label="Password" type="password" style={textFieldStyle}></TextField>
                <Button variant="contained"style={buttonStyle}>
                <Link className="link" to="/login">Create Account</Link>  </Button>
                
                <Link  to="/home">Already you have account?Log in</Link>
            </Paper>
        </Grid>
    )
}
export default Signup
