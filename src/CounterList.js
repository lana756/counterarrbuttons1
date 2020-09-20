import React from "react";
import './App.css'

function CounterList(props){
    return (
        <div>
            {props.list.map((el, i) => <div key={Math.random()}>
               <button onClick={() => props.counterChange(i, -2)}>-</button>
                <button onClick={() => props.counterChange(i, -1)}>-</button>
                {el}
                <button onClick={() => props.counterChange(i, 1)}>+</button>
                <button onClick={() => props.counterChange(i, 2)}>+</button>
            <button onClick={() => props.deleteCounter(i)}> Delete </button>
            </div>)}
        </div>
    )
}
export default CounterList;