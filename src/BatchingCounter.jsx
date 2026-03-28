import { useState } from "react";


export const BatchingCounter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [isActive, setActive] = useState(false);

    console.log("Component re-rendered");

    const handleClick = () => {
        setCount((prev) => {
            return prev+1;
        });
        setCount((prev) => {
            return prev+5;
        });
        setCount((prev) => {
            return prev+10;
        });

        setName("Updated");

        setActive(true);
    };
    return (
        <div>
        <p>Count: {count}</p>
        <p>Name: {name}</p>
        <p>Active: {isActive? "Yes" : "No"}</p>
        <button onClick={handleClick}>Update all three</button>
        </div>
    );
};