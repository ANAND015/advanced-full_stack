import { useState } from "react";

const Gallery=()=>{
    
    // var counter=10;
    var number=50.5;
    var name="Dinesh Karthik Rajan"
    var[counter,setCount]=useState(0);
    function increment(){
        setCount(counter+1)
    }
    function decrement()
    {
        setCount(counter-1)
    }
    function reset()
    {
        setCount(counter=0)
    }
    return(
    <section>
        <h1>This is my Gallery Page</h1>
        <h2 style={{textAlign:"center"}}>Learning State Concept</h2>
        <h3>The State of my variable counter is {counter}</h3>
        <button onMouseOver={increment}>Increment</button>
        <button onDoubleClick={decrement} style={{marginLeft: 5}}>Decrement</button>
        <button onClick={reset} style={{marginLeft: 5}}>Reset</button>
        <h2>The number of state is {number}</h2>
        <h2>My friend name is dheenudunu {name}</h2>

    </section>
    )
}
export default Gallery;