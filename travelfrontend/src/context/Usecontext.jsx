import React from 'react'

import {createContext, useState} from 'react'

const usecontext=createContext()

   


export const AuthContextProvider = ({ children }) => {
 
 const [userLoginstatus,setuserLoginstatus]=useState(false);

const togglelogin=()=>setuserLoginstatus(!userLoginstatus)

    return (
        <AuthContext.Provider value={{ userLoginstatus, togglelogin }}>
            {children}
        </AuthContext.Provider>
    )
    
}
