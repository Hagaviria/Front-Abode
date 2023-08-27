import React from 'react';
import "./styles.css";
import hotel from "../../assets/img/hotel1.jpg";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

export default function Cards() {
  return (
    <div  className='cards-flex' >
        <img src={hotel} className='card-img'/>
        <div className='card-info'>
            <h3 className='card-title'>Place</h3>
            <div className='card-rating'>
              <StarBorderRoundedIcon/>
              <p>4.88</p>
              
        </div>

        </div>
      <p style={{marginTop:0}}>Beach and sea views</p>
      
    </div>
  )
}
