import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Cards.css";

export default function Temperamets({ dogs, temperaments }) {
  let dog = useSelector((state) => state.dogs);
  let temperament = useSelector((state) => state.temperaments);
  const [temp, setTemp] = useState("")
  const [selectedTemp, setSelectedTemp] = useState([])

  const handleChange =  (e) => {
    e.preventDefault();
    setSelectedTemp(e.target.value);
  };
function filter(e){
  dog  = dog.filter((d) => {

    if(d.name){
  return d.name.split(", ").includes(e.target.value);
    }
    else {
    return   d.includes(e.target.value)
    }
})
}
  return(
  <div className="addtemp">
  <select
    className="addtemperaments"
    name="temperaments"
    id="temperaments"
    onChange={handleChange}
  >
    <option className="labels">Select temperaments</option>
    {temperament.map((x) => (
      <option value={x.name} key={x.id}>
        {x.name}
      </option>
    ))}
  </select>
  <ul>
    <li id="title">Chosen temperament:</li>
    {temperament.map((x) => (
      <li key={x.id} value={selectedTemp}>
        {temperament[x - 1].name} 
      </li>
    ))}
  </ul>
  <button onClick={filter}>Filter</button>
</div>
  )}

  //PREGUNTAR SANTIAGO: TRAER IMAGEN PERROS, VER TEMPERAMENTO PERROS, SEARCHBAR XQ ANDA MAL 
  //QUEDA POR HACER: filtrar por temperaments, onclose, testing y css 