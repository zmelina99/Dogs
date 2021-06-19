import React from "react";
//import './Card.css';
import { NavLink } from "react-router-dom";
import "./Card.css";

export default function Card({ name, image, temperaments, id }) {
let i = 101;
i++
  return (
    <div className="card">
      <NavLink to={`/dogs/${id}`}>
        <h5 className="card-title">{name}</h5>
      </NavLink>
      <div className="card-body">
        <div className="image">
          <img
            className=""
            src={
              image?.url
                ? image.url
                : `https://placedog.net/400`
            }
            width="300"
            height="300"
            alt=""
          />
        </div>
        {temperaments && (
          <div className="temperaments">
            <p>
              Temperament:{" "}
              {typeof temperaments === "string"
                ? temperaments
                : temperaments.map((d) => <p>{`${d.name} `},</p>)}
            </p>
          </div>
        )}{" "}
      
      </div>
    </div>
  );
}
