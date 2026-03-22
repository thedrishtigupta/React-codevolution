// import { UserInfo } from "./UserInfo";

// export const UserCard = ({name, age, city, email}) => {

//     return (
//         <div>
//             <h2>User Details</h2>
//             <UserInfo
//                 name= {name} age = {age} 
//                 city = {city} email = {email}
//             />
//         </div>
//     );
// };

import { UserInfo } from "./UserInfo";

export const UserCard = ({id, ...rest}) => {

    return (
        <div>
            <h2>User {id} Details</h2>
            <UserInfo {...rest}/>
        </div>
    );
};