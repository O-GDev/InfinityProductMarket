import React from 'react'
import ReactDOM from "react-dom/client";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Landingpage from './screens/landingpage';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navmenu from './component/navmenu';
import Choosesociety from './screens/choosesociety';
import Productplacehome from './screens/productplacehome';
import Serviceplacehome from './screens/serviceplacehome';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='nav' element={<Navmenu />} />
        <Route path='choosesociety' element={<Choosesociety />} />
        <Route path='producthome' element={<Productplacehome />} />
        <Route path='servicehome' element={<Serviceplacehome />} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
