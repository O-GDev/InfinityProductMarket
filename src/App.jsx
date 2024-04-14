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
import Discovery from './screens/discovery';
import Marketing from './screens/marketing';
import Selleersprofile from './screens/selleersprofile';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage />} />
        <Route path='nav' element={<Navmenu />} />
        <Route path='choosesociety' element={<Choosesociety />} />
        <Route path='reg/:id' element={<Productplacehome />} />        
        <Route path='sellerdashboard/' element={<SellerDashboard />} />
        <Route path='todaydeal' element={<Todaydeal />} />
        <Route path='discovery' element={<Discovery />} />
        <Route path='marketing' element={<Marketing />} />
        <Route path='sellersprofile' element={<Selleersprofile />} />

      </Routes>
      </BrowserRouter>
    
  )
}

export default App
