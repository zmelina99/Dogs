import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Cards.css";

export default function Cards({ dogs, temperaments }) {
  let dog = useSelector((state) => state.dogs);
  let temperament = useSelector((state) => state.temperaments);
  const [temp, setTemp] = useState("")
  
  dogs.filter(d => d.temperament !== teperament[i])
  function handleChangeTemp(e) {
    let num = [];
    //console.log(e.target.value, input.temperaments)
    num = input.temperaments;
    num.push(e.target.value);
    //input.temperaments= num
    setInput({ ...input, temperaments: num });
    console.log("hola", input.temperaments);
  }
  function onClose() {
    let newtemps = [];
    let removed = [];
    newtemps = input.temperaments;
    //console.log('newtemps', newtemps)
    for (let i = 0; i < input.temperaments.length; i++) {
      //console.log('hola', temperament.length)
      removed = newtemps.filter((c) => {
        console.log("c", c);
        console.log("input.temperaments", input.temperaments[i], i);
        return c !== input.temperaments[i];
      });
    }
    setInput({ ...input, temperaments: removed });
  }
  return(
  <div className="addtemp">
  <select
    className="addtemperaments"
    name="temperaments"
    id="temperaments"
    multiple
    onChange={handleChangeTemp}
  >
    <option className="labels">Select temperaments</option>
    {temperament.map((x) => (
      <option value={x.id} key={x.id}>
        {x.name}
      </option>
    ))}
  </select>
  <ul>
    <li id="title">Chosen temperaments:</li>
    {input.temperaments.map((x) => (
      <li key={x} value={x.id}>
        {temperament[x - 1].name} <button onClick={onClose}>X</button>
      </li>
    ))}
  </ul>
</div>
  )}

  //PREGUNTAR SANTIAGO: TRAER IMAGEN PERROS, VER TEMPERAMENTO PERROS, SEARCHBAR XQ ANDA MAL 
  //QUEDA POR HACER: filtrar por temperaments, onclose, testing y css 