import React from "react";
import { Redirect } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {getDogDetail} from  "../Actions"
import { useSelector } from "react-redux";


export default function Dog(props) {
    const dispatch = useDispatch()
    React.useEffect(() => {
     dispatch(getDogDetail(props.match.match.params.id))
    }, []); 
    const info = useSelector( (state) => state.dogDetail[0])
    return (
       
        <div className="info">
                <div className="container">
                      <h2>{info?.name}</h2>
                    <div className="info">
                        //poner loading 
                        <div>Temperament: {info?.temperament}</div>
                        <div>Height: {info?.height.metric}cm</div>
                        <div>Weight: {info?.weight.metric}kg</div>
                        <div>Life span: {info?.life_span}</div> 
                        <div>{info?.image.url}</div>
                    </div> 
            </div>
            </div>

         )
}