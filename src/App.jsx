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
import SellerDashboard from './screens/sellersdashboard';
import { Todaydeal } from './screens/todaydeal';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='nav' element={<Navmenu />} />
        <Route path='choosesociety' element={<Choosesociety />} />
        <Route path='producthome' element={<Productplacehome />} />
        <Route path='servicehome' element={<Serviceplacehome />} />
        <Route path='buyerorseller' element={<Buyerorsellerpage />} />
        <Route path='subscribe' element={<Subscriptionoage />} />
        <Route path='signup' element={<Signuppage />} />
        <Route path='payment' element={<Payment />} />
        <Route path='paymentdetails' element={<Paymentdetails />} />
        <Route path='sellerdashboard' element={<SellerDashboard />} />
        <Route path='todaydeal' element={<Todaydeal />} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
