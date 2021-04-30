import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import NavBar from "./NavBar";

//hacer usestate para poder usar dogs 

export default function Home(){

 //function que recibe el state de redux 
    return (

        <div> 
            <NavBar />
            <div>  
                    <Cards/>
            </div>
        </div>
    )
}