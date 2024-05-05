import React from 'react'
import ReactDOM from "react-dom/client";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Landingpage from './screens/landingpage';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navmenu from './component/navmenu';
import Choosesociety from './screens/choosesociety';
import Productplacehome from './screens/productplacehome';
import Serviceplacehome from './screens/serviceplacehome';
import Buyerorsellerpage from './screens/buyerorsellerpage'
import Subscriptionoage from './screens/subscriptionoage';
import Signuppage from './screens/signuppage';
import { Payment } from './screens/payment';
import Paymentdetails from './screens/paymentDetails';
import BuyerDashboard from './screens/buyerdashboard';
import { Todaydeal } from './screens/todaydeal';
import Discovery from './screens/discovery';
import Marketing from './screens/marketing';
import Selleersprofile from './screens/selleersprofile';
import SellerDashboard from './screens/sellerdashboard';
import ProfilePage from './screens/profilepage';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage />} />
        <Route path='nav' element={<Navmenu />} />
        <Route path='choosesociety' element={<Choosesociety />} />
        <Route path='reg/:id' element={<Productplacehome />} />        
        <Route path='buyerdashboard/' element={<BuyerDashboard />} />
        <Route path='sellerdashboard' element={<SellerDashboard/> }/>
        <Route path='todaydeal' element={<Todaydeal />} />
        <Route path='discovery' element={<Discovery />} />
        <Route path='marketing' element={<Marketing />} />
        <Route path='sellersprofile' element={<Selleersprofile />} />
        <Route path='signup' element={<Signuppage />} />
        <Route path='myprofile' element={<ProfilePage />} />

      </Routes>
      </BrowserRouter>
    
  )
}

export default App
