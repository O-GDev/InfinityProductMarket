import React from 'react'
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


const App = () => {
  return (
   <div>
       <BrowserRouter>
       <ShowNavBar>        
    <Navmenu />
       </ShowNavBar>       
      {/* <LoggedinBuyerNav />
      <LoggedinNav /> */}
        <Routes>
          <Route path='/' element={<Landingpage />} />
        <Route path='nav' element={<Navmenu />} />
        <Route path='choosesociety' element={<Choosesociety />} />
        <Route path='reg/:id' element={<BuyerBackground />} />        
        <Route path='sreg/:id' element={<Productplacehome/>} />
        <Route path='buyerdashboard' element={<BuyerDashboard />} />
        <Route path='sellerdashboard' element={<SellerDashboard/> }/>
        <Route path='todaydeal' element={<Todaydeal />} />
        <Route path='discovery' element={<Discovery />} />
        <Route path='myprofile' element={<Aside />} />
        <Route path='marketing' element={<Marketing />} />
        <Route path='sellersprofile' element={<Sellersprofile />} />
        <Route path='signup' element={<Signuppage />} />
        {/* <Route path='buyerprofile' element={<} */}

      </Routes>
      </BrowserRouter>
    
   </div>
  )
}

export default App
