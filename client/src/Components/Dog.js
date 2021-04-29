import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDogDetail } from "../Actions";
import { useSelector } from "react-redux";
import "./Dog.css";

export default function Dog(props) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDogDetail(props.match.match.params.id));
  }, []);
  const info = useSelector((state) => state.dogDetail[0]);
  console.log(info);

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
    <div className="info">
      <div className="card-title">{info?.name}</div>
      <div className="details">
        <div>Temperament: {typeof  info?.temperament == 'string' ? info?.temperament : info?.temperaments.map(d => d.name)}</div>
        <div>Height: {manageHeight(info)}cm</div>
        <div>Weight: {manageWeight(info)}kg</div>
        <div>Life span: {info?.life_span}</div>
        <img src={info?.image?.url || "https://www.creativefabrica.com/wp-content/uploads/2020/05/29/Dog-dxf-svg-png-eps-Cut-file-Graphics-4226994-1-1-580x386.jpg"} width="300" height="200" alt="" /> 
        {/*  La image rompe pero si la comento, trae  los datos, excepto los temperamentos */}
      </div>
    </div>
  );
}
