import React, { useState } from 'react';

function Details(parameter) {
    let [counter, setCounter] = useState(0); // an array [counter, setCount]
    let [number, setNumber] = useState(2); // an array [counter, setCount]
    // 
      function decrement(param) {
            counter--;
            setCounter(counter);
          console.log("decrement", counter);
      }
      function increment(param) {
            counter++;
            setCounter(counter);
          console.log("increment", counter);
      }
      function mult(param) {
          const abc = number * number;
           // number = number * number;
            setNumber(abc);
      }
      return (
      <div>
        <button onClick={increment}>+</button>
        <span>{counter}</span>
        <button onClick={decrement}>-</button>
        <button onClick={mult}>Multiplier</button>
        <span>{number}</span>
        <p className="New-Style">{parameter.parameter} <br /> {parameter.another}</p>
        </div>
      )
}

export default Details;