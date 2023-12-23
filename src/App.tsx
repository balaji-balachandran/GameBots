// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Checkers from './pages/Checkers'
import Home from './pages/Home'

import './App.css'

function App() {

  return (
    <Router>
      {/* <Navbar />  //Navbar introduction coming in step 6 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/checkers' element={<Checkers />} />
        {/* <Route path='/inspire' element={<Inspiration />} /> */}
        {/* <Route path='/forum' element={<Forum />} /> */}
      </Routes>
    </Router> 
  )
}

export default App
