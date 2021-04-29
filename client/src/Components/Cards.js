import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import "./Cards.css";
import Select from "react-select";
import Card from "./Card.js";
//import Checkbox from './Checkbox.js'

export default function Cards({ dogs, temperaments, name }) {
  let dog = useSelector((state) => state.dogs);
  let temperament = useSelector((state) => state.temperaments);
  const [order, setOrder] = useState(dog);
  const [input, setInput] = useState("");
  const [inputTemp, setInputTemp] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const dogsPerPage = 8;
  const pagesVisited = pageNumber * dogsPerPage;
  //estado que haga filter dogs para que ande el boton 
  const [fDogs, setFDogs] = useState([])

  useEffect(() => {setFDogs([...dog])}, [dog])

  /*    ------------------------------
            Breed filter */
  const handleChange =  (e) => {
    e.preventDefault();
    setInput(e.target.value);
    //setFDogs([...dog]);
    console.log(input)
    //setTimeout(control(), 5000)
    control(e.target.value)
    console.log(input)
  };

function control(word){

 if (word.length !== 0) {
    let filtered = dog.filter((d) => {
      return d.name.toLowerCase().includes(word.toLowerCase());
    });
    setFDogs([...filtered])
  }
  else {
    setFDogs([...dog])
  }
};

  function myDogs(){
    let filtered = []
   filtered = dog.filter((d) => typeof d.id !== 'number')
       setFDogs([...filtered])
     
  }

  function showAll(){
    setFDogs([...dog])
  }

  function apiDogs() {
    let filtered = []
   filtered = dog.filter((d) => typeof d.id === 'number')
       setFDogs([...filtered])
  }

 
  function manageWeight(a, b) {
    if (b) {
      if (b.weight.metric) {
        return b.weight.metric;
      } else {
        return b.weight;
      }
    } else {
      if (a.weight.metric) {
        return a.weight.metric;
      } else {
        return a.weight;
      }
    }
  }

  
  /*    ------------------------------
            Pagination */
  const displayDogs = fDogs
    .slice(pagesVisited, pagesVisited + dogsPerPage)
    .map((d) => (
      <Card
        key={d.id}
        name={d.name}
        temperaments={typeof d.temperament == 'string' ? d.temperament : d.temperaments}
        image={d.image}
        id={d.id}
      />
    ));
  console.log('string', dog, fDogs);
  const pageCount = Math.ceil(dog.length / dogsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  function handleChangeTemp(e, name) {
    e.preventDefault();
    let narray = [];
    narray = dog.filter((x) => {
      console.log(x);
      return x.temperament === name;
    });
    return narray;
  } 
  /* function handleChangeTemp(e){
    let num = []
    //console.log(e.target.value, input.temperaments)
    num= inputTemp.temperaments
    num.push(e.target.value) 
    //input.temperaments= num
    setInputTemp({...inputTemp, temperaments: num})
    console.log('hola', inputTemp.temperaments, e.target.value)
  } */

  return (
    <div>
      <form id="searchbar" action="">
        <input
          className="barra"
          type="search"
          value={input}
          onChange={handleChange}
        />
        <i class="fa fa-search"></i>
      </form>
      <div className="all">
        <div id="buttons">
          <div className="divtemperaments">
      
             <select className="temperamentsfil" onChange={handleChangeTemp}>
              <option>Select temperaments</option>
              {temperament.map((x) => (
                <option value={x.id} key={x.id}>
                  {x.name}
                </option>
              ))}
            </select>
            
          </div>
        </div>

       {fDogs.length > 0 && <div className="cards">{displayDogs}</div>}

        <div id="buttons">
          <span id="sortby"> Sort by</span>
         <button
            className="sorting"
            onClick={myDogs}
            > Show my dogs</button> 
             <button
            className="sorting"
            onClick={apiDogs}
            > Show api dogs</button> 
             <button
            className="sorting"
            onClick={showAll}
            > Show all dogs</button> 
          
          {/*  ------------------------------
            Sorting alphabetically  */}
          <button
            className="sorting"
            onClick={() => {
              fDogs.sort((a, b) => a.name.localeCompare(b.name));
              setOrder([...fDogs]);
            }}
          >
            A-Z
          </button>
          <button
            className="sorting"
            onClick={() => {
              fDogs.sort((a, b) => a.name.localeCompare(b.name)).reverse();
              setOrder([...fDogs]);
            }}
          >
            Z-A
          </button>

          {/*  ------------------------------
            Sorting by weight  */}
          <button
            className="sorting"
            onClick={() => {
              fDogs.sort(
                (a, b) =>
                  parseFloat(manageWeight(b)) - parseFloat(manageWeight(a))
              );
              setOrder([...fDogs]);
            }}
          >
            Descending weight
          </button>
          <button
            className="sorting"
            onClick={() => {
              fDogs.sort(
                (a, b) =>
                  parseFloat(manageWeight(a)) - parseFloat(manageWeight(b))
              );
              setOrder([...fDogs]);
            }}
          >
            Ascending weight
          </button>
         
        </div> 
      </div>

      {/*  ------------------------------
            Shows the breeds  */}

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousLink"}
        nextLinkClassName={"nextLink"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

/* 
TENES TRES MINUTOS PARA: 
1. subir foto a slack de la vista mas linda que tengas en una ventana de tu casa 
2. traer algo mas chiquito que la uña de tu dedo chiquito
3. encontrar algo que sea mas viejo que vos 
4. poner un fondo en meet que represente un lugar en el que te gustaria estar 
5. traer la cosa mas suave que haya en tu casa  */
