import React from 'react';
//import './Card.css';
import {NavLink} from 'react-router-dom';
import './Card.css'


export default function Card ({name, image, temperament, id}) {
 
  function manageImage(id){
    if (image){
      return `https://cdn2.thedogapi.com/images/${image.id}.jpg`
    }
    else {
      return 'This dog does not havean image'
    }

  }
    return (
      <div className="card">
      
          <NavLink to={`/dogs/${id}`}>
            <h5 className="card-title">{name}</h5>
          </NavLink>
          <div className="card-body">
          <div className="image">
              <img className="" src={manageImage(id)} width="300" height="300" alt="" /> 
            </div> 
            

            
            <div className="temperaments">
              <p>Temperament: {temperament}</p>
            </div>
            </div>
        </div>
      
    );
};

