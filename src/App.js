import React, {useState} from 'react';
import './App.css';
import CounterList from "./CounterList";

function App() {
    const [counters, setCounters] = useState([0, 0, 0])
    const addCounter = ()=> {
        const newCounters = [...counters]
        newCounters.push(0)
        setCounters(newCounters)
    }
    const counterChange =(index, val)=> {
       const newCounters = counters.map((el, i) => {
           if(index === i) return el + val
           return el
       })
        setCounters(newCounters)
    }
const deleteCounter = (index) => {
        const newCounter = counters.filter((el,i) => {
            return index !== i
        })
    setCounters(newCounter)
}
    return (
        <div>
            <button onClick={() => setCounters([0, 0, 0]) }> Reset </button>
            <button onClick ={addCounter}> Add new</button>
            <hr/>
            <CounterList deleteCounter ={deleteCounter} counterChange={counterChange}  list={counters}/>
        </div>
    );
}

export default App;
