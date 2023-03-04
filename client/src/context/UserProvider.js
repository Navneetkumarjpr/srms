import React from 'react'
import { createContext, useState } from 'react'
export const UserContext= createContext(null);
const UserProvider = ({children}) => {
    const [studentLogged, setStudentLogged] = useState({});
    return (
        <UserContext.Provider value={{studentLogged, setStudentLogged}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider