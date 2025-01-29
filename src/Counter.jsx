import React, { useState } from "react";

function Counter() {

  const [counter,setCounter] = useState(0)
  // variable , oru fucntion pole , inbuild ayittu ulla oru function 

  const onIncrementBtn = ()=>{
    setCounter(counter+1)
  }

  const onDecrementBtn = ()=>{
    if(counter!==0){
    setCounter(counter-1)
    }
  }

  const onResetBtn = ()=>{
    setCounter(0)
  }




  return (


    <div style={{ textAlign:"center"}}>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <div>
        <button

        onClick={onIncrementBtn}

          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "yellow",
            color: "black",
            borderRadius: "15px",
            border:"none"
          }}
        >
          Increment
        </button>
        <button
        onClick={onDecrementBtn}
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "red",
            color: "black",
            borderRadius: "15px",
            border:"none"
          }}
        >
          Decrement
        </button>
        <button
        onClick={onResetBtn}
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "green",
            color: "black",
            borderRadius: "15px",
            border:"none"
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
