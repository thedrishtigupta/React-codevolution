import { useState } from "react";


export const StateCounter = () => {
    const [count, setCount] = useState(0);
    console.log("After re-render, count is: ", count);

    const handleClick = () => {
        setCount(count + 1);
        console.log("After count+1, count is: ", count);
        setCount(count + 5);
        console.log("After count+5, count is: ", count);
        setCount(count + 10);
        console.log("After count+10, count is: ", count);
        setTimeout(() => {
            console.log("After 2 seconds, count is: ", count);
        }, 2000);
    };
    return (
        <div>
        <p>Count is {count}</p>
        <button onClick={handleClick}>Increment</button>
        </div>
    );
};