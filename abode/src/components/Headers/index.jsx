import React from 'react';
import "./styles.css";
import logo from "../../logo/abode.jpg"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import BasicMenu from './Profile';

export default function Header() {
  return (

    
    <div className='navbar'>
      <img src={logo} alt="abode-logo" className='navbar-logo'/>
      <div className='search-bar'>
        <div className='search-bar-text'>Location</div>
        <div className='search-bar-text'>Check-in</div>
        <div className='search-bar-text'>Check-Out</div>  
        <div className='search-bar-icon'><SearchRoundedIcon sx={{width:20,height:20}}aontSize='small'/>Search</div>
 
      </div>
     
      <div className='profile-container'>
        <div className='profile-option'>
        <BasicMenu/>
          
        </div>
      </div>
      
      
    </div>
  )
}