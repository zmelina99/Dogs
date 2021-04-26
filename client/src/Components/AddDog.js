import React from 'react';
import { connect } from "react-redux";
import {addDog} from '../../actions/index.js'

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddDog(props) {
  const [input, setInput] = React.useState({ breedName: '', height: '', weight: '', life_span: '', temperaments: ''})
  


  function handleChange(e){
    setInput({...input, [e.target.name]: e.target.value })
  }
    

  function handleSubmit(e){
    e.preventDefault()
    props.addTodo({breedName, height, weight, life_span, temperaments})
  
  }
  return (
    <form onSubmit = {handleSubmit}>
       <label>
       Breed
        </label>
       <input type="text"
          name="breed"
          value={breedName} 
          onChange={handleChange}  /> 
      
      <label>
        Height
        </label>
        <textarea type="text"
          name="height"
        value={height} 
          onChange={handleChange} />
        <label>
        Weight
        </label>
        <textarea type="text"
          name="weight"
        value={weight} 
          onChange={handleChange} />

        <label>
        Life_span
        </label>
        <input type="text"
          name="life_span"
       value={life_span} 
          onChange={handleChange} />

        <label>
        Temperaments
        </label>
        <select multiple={true} 
          //hacer una lista para seleccionar temperamentos 
          //name:'temperaments'  select  que meaprea  temp y renderiza option con cada uno 
          onChange={handleChange} />
       
        <button type= {'submit'}>Add Dog!</button>
    </form>
  )
};

 function mapDispatchToProps(dispatch){
  return {
    addDog: dog => dispatch(addDog(dog))
  }
}

export default connect(null, mapDispatchToProps)(AddDog)
