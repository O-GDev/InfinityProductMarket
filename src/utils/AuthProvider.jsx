import React, { useState } from 'react'
import { useContext, createContext } from 'react'
import { BASE_URL } from '../component/url/url'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const[data, setData] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [message, setMessage] = useState()
    const navigate = useNavigate();
    const login = async(loginData) =>{
        await fetch(`${BASE_URL}/logInUsers`,{
            method: 'POST',
            body: JSON.stringify({
                "email":loginData.email,
                "password":loginData.password,
                "role":loginData.role
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res => res.json())
        .then(data => setData(data))
        // setError(false)
        if(data.status == 200 ){
                navigate('/buyerdashboard')
                localStorage.setItem("token", JSON.stringify(data.token.access_token))
                setToken(data.token.access_token)
                localStorage.setItem("role", JSON.stringify(data.role)) 
                setMessage(data.message)
                console.log(data)
        }else{
        setMessage(data.message)
    }
    }
    const sellerlogin = async(loginData) =>{
        await fetch(`${BASE_URL}/logInUsers`,{
            method: 'POST',
            body: JSON.stringify({
                "email":loginData.email,
                "password":loginData.password,
                "role":loginData.role
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res => res.json())
        .then(data => setData(data))
        // setError(false)
        if(data.status == 200 ){
                navigate('/sellerdashboard')
                localStorage.setItem("token", JSON.stringify(data.token.access_token))
                setToken(data.token.access_token)
                localStorage.setItem("role", JSON.stringify(data.role)) 
                setMessage(data.message)
                console.log(data)
        }else{
        setMessage(data.message)
    }
    }
    
    const logout = () => {
        setData(null);
        setToken("");
        localStorage.removeItem("token");
        navigate("/choosesociety");
      };
      
  return (
    <AuthContext.Provider value={{login, sellerlogin, token, message, logout}}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider


export const useAuth = () =>{
    return useContext(AuthContext);
}