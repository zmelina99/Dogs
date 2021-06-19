import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import NavBar from "./NavBar";


export default function Home(){

    return (

        <div> 
            <NavBar />
            <div>  
                    <Cards/>
            </div>
        </div>
    )
}