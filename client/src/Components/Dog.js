import React from "react";
import { useDispatch } from "react-redux";
import { getDogDetail } from "../Actions";
import { useSelector } from "react-redux";
import "./Dog.css";
import NavBar from "./NavBar";

export default function Dog(props) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDogDetail(props.match.match.params.id));
  }, []);
  const info = useSelector((state) => state.dogDetail[0]);

  function manageWeight(info) {
    if (info?.weight.metric) {
      return info?.weight.metric;
    } else {
      return info?.weight;
    }
  }
  function manageHeight(info) {
    if (info?.height.metric) {
      return info?.height.metric;
    } else {
      return info?.height;
    }
  }

  return (
    <div>
      <NavBar />
      <div id="cardContainer">
        <div className="info">
          <div className="card-title">{info?.name}</div>
          <div className="details">
            <div>
              🦴Temperament:{" "}
              {typeof info?.temperament == "string"
                ? info?.temperament
                : info?.temperaments.map((d) => d.name).join(", ")}
            </div>
            <div>🦴Height: {manageHeight(info)}cm</div>
            <div>🦴Weight: {manageWeight(info)}kg</div>
            <div>🦴Life span: {info?.life_span}</div>
            <img
              id="image"
              src={info?.image?.url || "https://placedog.net/400"}
              width="300"
              height="200"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
