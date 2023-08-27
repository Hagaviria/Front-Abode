import React from 'react';
import hotel from "../../assets/img/hotel1.jpg";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const  Cards=() =>{
  const CardMediastyle={  height: "300px",width: "300px", borderRadius:"0.5rem",objectFi:"cover"}
  const CardStyle={ justifyContent: "center",padding:" 1rem 3rem", }
  
  return (
    <Card style={CardStyle}>
    <CardMedia
      image={hotel}
      title="Card image"
      component="img"
  style={CardMediastyle}
 
    
    />
    <CardContent>
      <Typography variant="h5"
      sx={{display: "flex",justifyContent: "space-between",alignitems: "flex-start"}}
       gutterBottom>
        Place
      </Typography>
      <Typography variant="body2" color="textSecondary"
      sx={{   display: "flex",
        gap: "0.25rem",
        alignItems: "center"}}>
        <StarBorderRoundedIcon/>
        4.88
      </Typography>
      <p style={{marginTop:0,display: "flex",
    justifyCcontent: "space-between",
    alignItems: "flex-start"}} >Beach and sea views</p>
    </CardContent>
    </Card>
  )
}
export default Cards
