import React from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = React.createContext()

function AuthProvider({children}){
    const [user, setUser] = React.useState(null)
    const navigate = useNavigate()

    const login = ({userName}) => {
        setUser({userName})
        navigate("/profile")
    }

    const logout = ({userName}) => {
        setUser({userName})
        navigate("/")
    }

    const auth ={user, login, logout}


    return(
        <AuthContext.Provider value={auth}>

        </AuthContext.Provider>
    )
}

function useAuth(){
    const auth = React.useContext(AuthContext)
    return auth
}


export {AuthProvider, useAuth}