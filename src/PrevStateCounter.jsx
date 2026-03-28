import { useState } from "react";


export const PrevStateCounter = () => {
    const [count, setCount] = useState(0);
    console.log("After re-render, count is: ", count); //16

    const handleClick = () => {
        setCount((prev) => {
            console.log("Prev value: ", prev); //0
            return prev+1;
        });
        console.log("After prev => prev+1, count is: ", count); //0
        setCount((prev) => {
            console.log("Prev value: ", prev); //1
            return prev+5;
        });
        console.log("After prev => prev+5, count is: ", count); //0
        setCount((prev) => {
            console.log("Prev value: ", prev); //6
            return prev+10;
        });
        console.log("After prev => prev+10, count is: ", count); //0
    };
    return (
        <div>
        <p>Count is {count}</p>
        <button onClick={handleClick}>Increment</button>
        </div>
    );
};