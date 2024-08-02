import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

function ShowNavBar({children}) {

    const location = useLocation()
    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() =>{
        console.log("this is location:",location )
        if(location.pathname==='/choosesociety'){
            setShowNavBar(false)
        }else{
            setShowNavBar(true)
        }
    },[location])
  return (
    <div>{showNavBar && children}</div>
  )
}

export default ShowNavBar