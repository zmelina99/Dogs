import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./CreateDog.css";

export default function CreateDog(props) {
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
    image:
      "https://www.creativefabrica.com/wp-content/uploads/2020/05/29/Dog-dxf-svg-png-eps-Cut-file-Graphics-4226994-1-1-580x386.jpg",
  });

  let temperament = useSelector((state) => state.temperaments);

  function axiosRegister(e) {
    e.preventDefault();
    axios.post(`http://localhost:3001/dog`, input);
  }

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
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

  return (
    <form className="allLabels" onSubmit={axiosRegister}>
      <label className="labels" for="name">
        Name
      </label>
      <input
        className="allInputs"
        type="text"
        name="name"
        value={input.name}
        onChange={handleChange}
      />

      <label className="labels" for="height">
        Height
      </label>
      <input
        className="allInputs"
        type="number"
        id="height"
        name="height"
        min="1"
        max="100"
        value={input.height}
        onChange={handleChange}
      />
      <label className="labels" for="weight">
        Weight
      </label>
      <input
        className="allInputs"
        type="number"
        id="weight"
        name="weight"
        min="1"
        max="100"
        value={input.weight}
        onChange={handleChange}
      />
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

      <button type="submit">Add Dog!</button>
    </form>
  );
}

//ONCHANGE METER EN EL ARRAY DE TEMPERAMENTOS DEL COSTADO