import React from "react";
import { Link } from 'react-router-dom';
import './LandingPage.css'

export default function LandingPage(){
    return (
        <div className= 'background'> 
            <div className= 'flex'> 
            <h1>Welcome </h1>
              <button className= 'enter'> <Link to ='/home'>
                   <span id='text'>Let's find some dogs!</span>
                </Link> </button>
            </div>
        
            <h2>Individual project - Melina Zellweger</h2>
    
 </div>
    )
}