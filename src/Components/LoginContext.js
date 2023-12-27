import React,{useState} from 'react'
import { createContext } from 'react'

export const adminlogined=createContext()

function LoginContext({children}) {
    const [loginData,setLoginData]=useState(false)
    return (
      <div>
        
          <adminlogined.Provider value={{loginData,setLoginData}}>
          {children}
          </adminlogined.Provider>
      </div>
    )
}

export default LoginContext
