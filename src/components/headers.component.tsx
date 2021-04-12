import React from 'react';
import IMGHeader from '../assets/le-buzz-9H0ZA1oPsYE-unsplash.jpg'
import Logo from '../assets/logo.png'
import '../styles/header.style.scss'

export default function Header() {
    return (
       <div className='header' style={{ backgroundImage: `url(${IMGHeader})`}}>
            <img src={Logo} alt='header'/>
        </div>
    );
}