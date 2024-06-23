import React, { useEffect, useState } from 'react'
import Landingpage from './screens/landingpage';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navmenu from './component/navmenu';
import Choosesociety from './screens/choosesociety';
import Productplacehome from './screens/productplacehome';
import Signuppage from './screens/signuppage';
import BuyerDashboard from './screens/buyerdashboard';
import { Todaydeal } from './screens/todaydeal';
import Discovery from './screens/discovery';
import Marketing from './screens/marketing';
import Sellersprofile from './screens/selleersprofile';
import SellerDashboard from './screens/sellerdashboard';
import ProfilePage from './screens/profilepage';
import BuyerBackground from './screens/buyerbackground';
import Aside from './lilcomponents/aside';
import ShowNavBar from './lilcomponents/ShowNavBar';
import LoggedinBuyerNav from './component/loggedinbuyernav';
import LoggedinNav from './component/loggedinnav';
import Subscriptionoage from './screens/subscriptionoage';
import { Payment } from './screens/payment';
import Paymentdetails from './screens/paymentDetails';
import store from './store';
import { Provider, useDispatch } from 'react-redux';
import BuyerSignin from './screens/BuyerSignin';
import BuyerSignup from './screens/BuyerSignup';
import Signinpage from './screens/signinpage';
import BuyersAside from './lilcomponents/dicaside';

const App = () => {
  const [token, setToken] = useState("")
  const [role, setRole] = useState("")
  useEffect(() =>{    
    setToken(JSON.parse(localStorage.getItem("token")))
    setRole(JSON.parse(localStorage.getItem("role")))
    console.log(role)

  })
  let nav;
  // if(role === "seller"){
  //   nav = <LoggedinNav />
  // }else if(role === "buyer"){
  //   nav = <LoggedinBuyerNav />
  // }0
  return (
   <Provider store={store}>
    <div className='text-[100%] md:text-[100%]'>
       <BrowserRouter>
       {token ?
       role == "seller" ?
       <LoggedinNav />
      // <div>cfvbnm/</div>
     :
     role == "buyer" ?
     <LoggedinBuyerNav />
     :
      <>
      <ShowNavBar>        
    <Navmenu />
       </ShowNavBar> 
       </> 
       :
       <>
      <ShowNavBar>        
    <Navmenu />
       </ShowNavBar> 
       </> 
       } 
        <Routes>
          {token ? 
          <>
          <Route path='sellerdashboard' element={<SellerDashboard/> }/>
          <Route path='todaydeal' element={<Todaydeal />} />
          <Route path='discovery' element={<Discovery />} />
          <Route path='myprofile' element={<Aside />} />
          <Route path='buyerprofile' element={<BuyersAside />} />
          <Route path='marketing' element={<Marketing />} />
          <Route path='sellersprofile' element={<Sellersprofile />} />
          <Route path='buyerdashboard' element={<BuyerDashboard />} />
          </>
      :
      <>
    <Route path='choosesociety' element={<Choosesociety />} />
      <Route path='' element={<Landingpage />} />
    <Route path='nav' element={<Navmenu />} />
    <Route path='reg/:id' element={<BuyerBackground />} />        
    <Route path='sreg/:id' element={<Productplacehome/>} />
      <Route path='signup' element={<Signuppage />} />
      <Route path='subscribe' element={<Subscriptionoage />} />
      <Route path='signup' element={<Signuppage />} />
      <Route path='signin' element={<Signinpage />} />
      <Route path='payment' element={<Payment />} />
      <Route path='paymentdetails' element={<Paymentdetails />} />
      <Route path='buyersignin' element={<BuyerSignin />} />
      <Route path='buyersignup' element={<BuyerSignup />} />
      </>
}
      </Routes>
      </BrowserRouter>
    
   </div>
   </Provider>
  )
}

export default App
