import React from 'react';
//import './Card.css';
import {Link} from 'react-router-dom';
import './Card.css'


export default function Card ({name, image, temperament, id}) {
    return (
      <div className="card">
        <div className="card-body">
          <Link to={`/dogs/${id}`}>
            <h5 className="card-title">{name}</h5>
          </Link>

            </div>
            <div className="">
              <p>Temperament: {temperament}</p>
            </div>

           <div className="image">
              <img className="" src={`https://cdn2.thedogapi.com/images/${image.id}.jpg`} width="150" height="150" alt="" /> 
            </div>  
        </div>
      
    );
};

/* En este componente tengo que juntat toda la info que quiero que se vea en mi card:
Nombre
Temperamento
Imagen  
No se como mostrar la imagen */