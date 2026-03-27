import { useState } from "react";


export const Counter = () => {
    
    const [count, setCount] = useState(0);
    console.log("Counter component rendered, with count = ", count);

    const handleClick = () => {
        setCount(count+1);
    }
    return (
        <button onClick={handleClick}>Count: {count}</button>
    );
};


// export const Counter = () => {
//     let count = 0;
//     console.log("Counter component rendered.");

//     const handleClick = () => {
//         count += 1;
//         console.log(count);
//     }
//     return (
//         <button onClick={handleClick}>Count: {count}</button>
//     );
// };