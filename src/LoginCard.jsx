import { useState } from "react";

export const LoginCard = () => {
    const [isLoggedIn, setLogin] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleLogin = () => {
        setLogin(!isLoggedIn);
    }
    return (
        <>
        <button onClick={handleLogin}>
        {isLoggedIn? "Logout" : "Login"}
        </button>
        <input type="text" placeholder="Type a message" value={message} onChange={handleChange}/>
        <p>{message}</p>
        </>
    );
};