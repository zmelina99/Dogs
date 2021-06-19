import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./CreateDog.css";
import NavBar from "./NavBar";

export default function CreateDog(props) {
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
    image:
      "https://placedog.net/400",
  });
  let temperament = useSelector((state) => state.temperaments);
  //const [errors, setErrors] = React.useState({});
 

  /* const validate = (input) => {
    let errors = {};
    if (!input.name) {
      errors.name = 'Name is required';
    } else if (!/^[A-Za-z]+$/.test(input.name)) {
      errors.name = 'Name is invalid';
    }
  
    if (!input.weight) {
      errors.weight = 'Weight is required';
    } else if (!/^[0-9]*$/.test(input.weight)) {
      errors.weight = 'Weight is invalid';
    }
    
    if (!input.height) {
      errors.height = 'Height is required';
    } else if (!/^[0-9]*$/.test(input.height)) {
      errors.height = 'Height is invalid';
    }
  
    return errors;
 
  };   */

  function axiosRegister(e) {
    e.preventDefault();
    axios.post(`http://localhost:3001/dog`, input)
    .then(res => {
     if (res.status === 200){
       alert("Dog succesfully created!")
     }
    }) 
   
  }

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
   /*  setErrors( validate({ ...input, [e.target.name]: e.target.value }) );  */
  }
  function handleChangeTemp(e) {
    let num = [];
    num = input.temperaments;
    num.push(e.target.value);
    setInput({ ...input, temperaments: num });
  }
/*   function onClose(e) {
    let newtemps = [];
    let removed = [];
    console.log(input.temperaments)
    newtemps = input.temperaments;
      removed = newtemps.filter((c) => {
        console.log(c.id)
        return c !== e.target.value
      });
    setInput({ ...input, temperaments: removed });
  }  */

  return (
    <div className= 'allCreate'>
        <NavBar />
    <form className="allLabels" onSubmit={axiosRegister}>
      <label className="labels" for="name">
        Name
      </label>
      <input
        className="allInputs"
        type="text"
        name="name"
        required
        value={input.name}
        onChange={handleChange}
      />
      {/*   {errors.name && (
          <p className="danger">{errors.name}</p>
        )} */}

      <label className="labels" for="height">
        Height
      </label>
      <input
        className="allInputs"
        type="number"
        required
        id="height"
        name="height"
        min="1"
        max="100"
        value={input.height}
        onChange={handleChange}
      />

{/* {errors.height && (
          <p className="danger">{errors.height}</p>
        )} */}
      <label className="labels" for="weight">
        Weight
      </label>
      <input
        className="allInputs"
        type="number"
        required
        id="weight"
        name="weight"
        min="1"
        max="100"
        value={input.weight}
        onChange={handleChange}
      />
      {/*   {errors.weight && (
          <p className="danger">{errors.weight}</p>
        )} */}
      <label className="labels" for="life_span">
        Life_span
      </label>
      <input
        className="allInputs"
        type="number"
        id="life_span"
        name="life_span"
        min="1"
        max="100"
        value={input.life_span}
        onChange={handleChange}
      />
      <label className="labels" for="temperaments">
        Choose temperaments:
      </label>

      <div className="addtemp">
        <select
          className="addtemperaments"
          name="temperaments"
          id="temperaments"
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
            <li className = 'chosen' key={x} value={x.id}>
              {temperament[x - 1].name}  {/* <button onClick={onClose}>X</button>  */}
            </li>
          ))}
        </ul>
      </div>

      <button className= 'addButton' type="submit">Add Dog!</button>
    </form >
    </div>
  );
}

