import React, { useEffect, useState } from 'react'
import { useAuth } from '../utils/AuthProvider'
import Navmenu from './navmenu'
import ShowNavBar from '../lilcomponents/ShowNavBar'
import LoggedinNav from './loggedinnav'
import LoggedinBuyerNav from './loggedinbuyernav'

const Navauth = () => {
    const auth = useAuth()
    const [role, setRole] = useState('')
    let nav;
    useEffect(() =>{
        setRole(localStorage.getItem("role"))
        
    },[])
  return (
   <div>
     {auth.token ? 
     <LoggedinBuyerNav />
     :          
        <ShowNavBar>
            <Navmenu />
        </ShowNavBar>
    }
   </div>
  )
}

export default Navauth