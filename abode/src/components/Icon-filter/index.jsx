import React from 'react'

import "./styles.css";
import { links } from '../../assets/icons';

export default function IconFilter() {
  return (
    <div className='Filter-icon'>
        { links.map((item, i)=>(
            <div key={i} className='links-icon'>
        <img  src={item.imgSrc} className='links-imgs'/>
        <p> {item.label}</p>
        </div>
        ))}
    </div>
  )
}
