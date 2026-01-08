import React , {useState} from "react";
const CounterCpmponent=()=>{
    const [count, setCount]= useState(12);
    
    return(
        <div>
            <p>Count Component-{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
};
export default CounterCpmponent;