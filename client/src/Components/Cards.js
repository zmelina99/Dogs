import React, {useState} from 'react';
import { useSelector } from "react-redux";
import ReactPaginate from 'react-paginate'
import './Cards.css'
import Select from 'react-select'
import Card from './Card.js';
//import Checkbox from './Checkbox.js'

export default function Cards({dogs, temperaments}) {

    let dog = useSelector( (state) => state.dogs)
    let temperament = useSelector( (state) => state.temperaments)
    const [order, setOrder] = useState(dog)
    const [input, setInput] = useState('')
    const [pageNumber,setPageNumber] = useState(0)
    const dogsPerPage = 8;
    const pagesVisited = pageNumber * dogsPerPage
    
/*    ------------------------------
            Breed filter */
    const handleChange = (e) => {
      e.preventDefault()
      setInput(e.target.value)
   }

/*    ------------------------------
            Pagination */
   if (input.length !== 0){
       dog = dog.filter((d) =>{
           return d.name.match(input)
       })
   }
   /*    ------------------------------
            Pagination */
    const displayDogs = dog
    .slice(pagesVisited, pagesVisited + dogsPerPage)
    .map(d => <Card
          key={d.id}
          name={d.name}
          temperament={d.temperament}
          image={d.image}
          id={d.id} 
        /> )
const pageCount = Math.ceil(dog.length/dogsPerPage)
const changePage = ({selected}) => {
  setPageNumber(selected)
}

const handleFilters= (filters, category) =>{

}


  return (
    <div>
       <select><option>Select temperaments</option>{temperament.map((x) => <option key={x.id}>{x.name}</option>)}</select>
    <div>
        <div>
        <input
  type="text"
  placeholder="Search"
  value={input}
  onChange={handleChange}
/>
   
    {/* <Select
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />  --> Para seleccionar multiples */}
    

{/*  ------------------------------
            Sorting alphabetically  */}
    <button onClick={() =>  {
       dog.sort((a, b) => a.name.localeCompare(b.name))
       setOrder([...dog])
    }}>A-Z</button>
    <button onClick={() => {dog.sort((a, b) => a.name.localeCompare(b.name)).reverse()
      setOrder([...dog])
     }}>Z-A</button>


{/*  ------------------------------
            Sorting by weight  */}
      <button onClick={() =>  {
       dog.sort((a, b) => parseFloat(b.weight.metric) - parseFloat(a.weight.metric));
       setOrder([...dog])
    }}>Descending weight</button>
    <button onClick={() => {dog.sort((a, b) => parseFloat(a.weight.metric) - parseFloat(b.weight.metric));
 setOrder([...dog])
     }}>Ascending weight</button> 
    </div>
  
 {/*  <Checkbox
    handleFilters= {filters => handleFilters(filters, 'temperaments')}
  /> */}
  {/*  ------------------------------
            Shows the breeds  */}
    <div className='cards'>
      {displayDogs}
    </div>
    </div>

<ReactPaginate 
    previousLabel = {'Previous'}
    nextLabel = {'Next'}
    pageCount = {pageCount}
    onPageChange = {changePage}
    containerClassName = {'paginationButtons'}
    previousLinkClassName = {'previousLink'}
    nextLinkClassName = {'nextLink'}
    disabledClassName = {'paginationDisabled'}
    activeClassName = {'paginationActive'}
    />
    </div>
  );
}

