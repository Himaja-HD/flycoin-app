import React from 'react';

import Home from './Routes/Page/home.component';
import Track from './Routes/Page/coin/coin.component';
import Login from './Routes/Page/Login/login.component';
import Write from './Routes/Page/write/writeus.component';
import Know from './Routes/Page/kyc/kyc.component';



import  Navigation  from './Routes/Navigation/navigation.component.jsx';
import Footer  from './Routes/Navigation/footer.component.jsx';

import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <div >
        <div>
      <Routes>
          
          <Route path='/' element={<Navigation />}>

            <Route index element={<Home />} />
            <Route path='/coin' element={<Track />} />     
            <Route path='/login' element={<Login />} />
            <Route path='/writeus' element={<Write />} />
            <Route path='/kyc' element={<Know />} />

           
          </Route>
         
          
      </Routes>
     
    </div>
  
      <Footer/>

      
    </div>
     
  );
}

export default App;
