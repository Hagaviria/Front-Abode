import React from 'react';
import hotel from "../../assets/img/hotel1.jpg";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import CardData from './cardData';


const  Cards=() =>{
  const CardMediastyle={  height: "300px",width: "300px", borderRadius:"0.5rem",objectFi:"cover"}
  const CardStyle={ justifyContent: "center",padding:" 1rem 3rem", display:"flex",gap:"1rem"}
  
 const cardData=CardData();
  return (
    <div >
    <Grid container spacing={2} style={CardStyle}
    >
      {cardData.map((item) => (
        <Card key={item.title} >
          <CardMedia
            image={item.image}
            title="Card image"
            component="img"
            style={CardMediastyle}
          />
          <CardContent>
            <Typography variant="h5"
              sx={{display: "flex", justifyContent: "space-between", alignitems: "flex-start"}}
              gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary"
            sx={{
              display: "flex",
              gap: "0.25rem",
              alignItems: "center",
            }}>
            <StarBorderRoundedIcon />
            {item.rating}
          </Typography>
          <p style={{ marginTop: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            Beach and sea views
          </p>
        </CardContent>
      </Card>
    ))}
    </Grid>
  </div>
  )
}
export default Cards