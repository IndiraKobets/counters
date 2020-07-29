import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";

function App() {
    const [counters, setCounters] = useState([0, 1, 2, 3]);


    const addCounter = () => {
        const r = Math.round(Math.random() * 10);
        setCounters([...counters, r])
    };

    const plusOne = (index) => {
        const updatedCounter = [...counters];
        updatedCounter[index] = updatedCounter[index] + 1;
        setCounters(updatedCounter);
    };

    const minusOne = (index) => {
        const updatedCounter = [...counters];
        updatedCounter[index] = updatedCounter[index] - 1;
        setCounters(updatedCounter);
    };
    const deleteOne = (index) => {
        const updatedCount = counters.filter((el, i) => i !== index);
        setCounters(updatedCount);
    };

    const resetOne = (index) => {
        const updatedCount = [...counters];
        updatedCount[index] = 0;
        setCounters(updatedCount);
    };

    const deleteAll = () => {
        setCounters([]);
    };

    return (
        <div className="App">

            {counters.map((el, i) => (
                <Counter
                    count={el}
                    key={i}
                    index={i}
                    plus={plusOne}
                    minus={minusOne}
                    deleteOne={deleteOne}
                    resetOne={resetOne}
                />
            ))}

            <button className="btn btn-outline-secondary" style={{margin: "5px"}} onClick={addCounter}>Add Counter</button>
            <button className="btn btn-outline-secondary" style={{margin: "5px"}} onClick={deleteAll}>Delete All</button>
        </div>
    );
}

export default App;
