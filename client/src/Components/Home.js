import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";

//hacer usestate para poder usar dogs 

export default function Home(){

 //function que recibe el state de redux 
    return (

        <div> 
            <div>
                    <Cards/>
            </div>
        </div>
    )
}