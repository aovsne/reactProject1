import React from 'react';
import "./name.css";



const name = (props) => {
    return(
        <div className="main">
            <p onClick={props.click}>Hello {props.name} {props.age} </p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default name;