import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Dog from "./Components/Dog";
import {addDog, getDogs, getTemperaments} from  "./Actions"
import { useSelector, useDispatch } from 'react-redux';
import NavBar from "./Components/NavBar";
import CreateDog from "./Components/CreateDog";
import About from './Components/About'

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
   dispatch(getDogs())
  }, []);
  React.useEffect(() => {
   dispatch(getTemperaments())
  }, []); 

  return (
     <React.Fragment>
          
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dogs/:id" render={(match) => <Dog match= {match}/>} />
          <Route exact path= '/createDog' component={CreateDog}/>
          <Route exact path= "/about" component={About}/>

      </React.Fragment> 

  )
}

export default App;

