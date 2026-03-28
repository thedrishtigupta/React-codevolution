import { useState } from "react";

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Bruce Wayne",
        age: 30,
        email: "batman@justiceleague.com",
        address: {
            city:"Gotham City",
            country: "USA",
        },
    });

    const updateName = () => {
        setUser({
            ...user, //To copy the object first, before overriding
            name: "Clark Kent",
        })
    }
    const updateAge = () => {
        setUser({
            ...user,
            age: user.age + 1,
        })
    }

    const updateMultiple = () => {
        setUser({
            ...user,
            name: "clark Kent",
            age: 31,
        })
    }
    const updateCity = () => {
        setUser({
            ...user,
            address:{
                ...user.address,
                city:"Metropolis",
            }
        })
    }
    return (
        <div>
        <h2>Name: {user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <button onClick={updateName}>Change name to Clark Kent</button>
        <button onClick={updateAge}>Increase age by 1</button>
        <button onClick={updateMultiple}>Change more than 1</button>
        <button onClick={updateCity}>Change city</button>
        </div>
    );
};