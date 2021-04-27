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
    
    function manageWeight(info){
    if(info?.weight.metric){
        return info?.weight.metric
    }
    else{
        return info?.weight
    }
}
function manageHeight(info){
    if(info?.height.metric){
        return info?.height.metric
    }
    else{
        return info?.height
    }
}

    return (
        <div className="info">
                <div className="container">
                      
                    <div className="info">
                        <div>{info?.name}</div>
                        <div>Temperament: {info?.temperament}</div>
                        <div>Height: {manageHeight(info)}cm</div>
                        <div>Weight: {manageWeight(info)}kg</div>
                        <div>Life span: {info?.life_span}</div> 
                        <img src={info?.image.url}/>
                    </div> 
            </div>
            </div>

         )
}