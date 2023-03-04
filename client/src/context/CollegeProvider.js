import React from 'react'
import { createContext, useState } from 'react'
export const CollegeContext= createContext(null);
const CollegeProvider = ({children}) => {
    const [collegeLogged, setCollegeLogged] = useState(false);
    return (
        <CollegeContext.Provider value={{collegeLogged, setCollegeLogged}}>
            {children}
        </CollegeContext.Provider>
    )
}

export default CollegeProvider