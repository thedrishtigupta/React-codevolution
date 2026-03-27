import { useState } from "react";

export const LoginCard = () => {
    const [isLoggedIn, setLogin] = useState(false);

    const handleLogin = () => {
        setLogin(!isLoggedIn);
    }
    return (
        <button onClick={handleLogin}>
        {isLoggedIn? "Logout" : "Login"}
        </button>
    );
};