import React, {useState} from 'react';
import  axios  from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { getDogDetail } from '../Actions';


export default function CreateDog(props) {
  const [input, setInput] = useState({
      name: '', 
      height: '', 
      weight: '',
      life_span: '',
      temperaments: [],
      image:{
        url:'https://www.creativefabrica.com/wp-content/uploads/2020/05/29/Dog-dxf-svg-png-eps-Cut-file-Graphics-4226994-1-1-580x386.jpg'
      }
  });
  
  let temperament = useSelector( (state) => state.temperaments)

  function axiosRegister(e) {
    e.preventDefault(); 
 axios.post(`http://localhost:3001/dog`, input)
  }

  function handleChange(e){
    setInput({...input, [e.target.name]: e.target.value })
  }
  function handleChangeTemp(e){
    let num = []
    console.log(e.target.value, input.temperaments)
    num= input.temperaments.concat(e.target.value) 
    //input.temperaments= num
    setInput({...input, [input.temperaments]: num})
    console.log(input, input.temperaments)
  }
  
  return (
    
    <form onSubmit = {axiosRegister}>

    <label for="name">Name</label>
       <input type="text"
          name="name"
          value={input.name} 
          onChange={handleChange}  />

  <label for="height">Height</label>
  <input 
          type="number" 
          id="height" 
          name="height" 
          min="1" 
          max="100"
          value={input.height} 
          onChange={handleChange}
  />
  <label for="weight">Weight</label>
  <input 
          type="number" 
          id="weight" 
          name="weight" 
          min="1" 
          max="100"
          value={input.weight} 
          onChange={handleChange}
  />
  <label for="life_span">Life_span</label>
  <input 
          type="number" 
          id="life_span" 
          name="life_span" 
          min="1" 
          max="100"
          value={input.life_span} 
          onChange={handleChange}
  />
  <label for="temperaments">Choose temperaments:</label>

<select 
name="temperaments"
 id="temperaments" 
 multiple
 //value={selectedTemp}
 onChange={handleChangeTemp}>
<option value=''>Select temperaments</option>
{temperament.map((x) => <option value={[x.id]} key={x.id}>{x.name}</option>)}

</select>

<button type= 'submit'>Add Dog!</button>
</form>
    
  )
};

