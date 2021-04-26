/* import React, {useState}from 'react'
//import {Checkbox, Collapse} from 'antd'
import { useSelector } from "react-redux";
const {Panel} = Collapse

export default function Checkbox(temperaments, props){
    let temperament = useSelector( (state) => state.temperaments)
    const [Checked, setChecked] = useState([])

    return(
        <div> 
            <input 
            type= 'checkbox'
            name= {temperament.map((x) => x.name)}
        </div>
    )
}
    /* const handleChangeT = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)

    }

    const renderCheckboxLists = () => temperament && temeprament.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox
                onChange={() => handleChangeT(value.id)}
                type="checkbox"
                checked={Checked.indexOf(value.id) === -1 ? false : true}
            />&nbsp;&nbsp;
            <span>{value.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </React.Fragment>
    ))

    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header="Continents" key="1">
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </div>
    )
}



/* {temperament.map((x) =>(
    <Select
      //onChange= {() => handleChangeT()}
      defaultValue={'hola'}
      isMulti
      name='filter by temperaments'
      options =  {x.name}
      className="basic-multi-select"
      classNamePrefix="select" />
))} */ 