import React from 'react';
//import './Card.css';
import {NavLink} from 'react-router-dom';
import './Card.css'


export default function Card ({name, image, temperaments, id}) {


    return (
      <div className="card">
      
          <NavLink to={`/dogs/${id}`}>
            <h5 className="card-title" >{name}</h5>
          </NavLink>
          <div className="card-body">
          <div className="image">
              <img className="" src={image?.url ? image.url : "https://www.creativefabrica.com/wp-content/uploads/2020/05/29/Dog-dxf-svg-png-eps-Cut-file-Graphics-4226994-1-1-580x386.jpg"} width="300" height="300" alt="" /> 
            </div> 

            {temperaments && <div className="temperaments">
             <p>Temperament: {typeof  temperaments === 'string' ? temperaments : temperaments.map(d => d.name, )}</p>  
            </div>} {/*  ¿existe temperaments? Si existe, se renderea, sino no */}
            </div>
        </div>
      
    );
};

//creo que es porque estoy mapeando los perros de la api y no los mios 