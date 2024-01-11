// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Chess from './pages/Chess'
import Home from './pages/Home'

import './App.css'

function App() {

  return (
    <Router>
      {/* <Navbar />  //Navbar introduction coming in step 6 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/chess' element={<Chess />} />
      </Routes>
    </Router> 
  )
}

export default App
