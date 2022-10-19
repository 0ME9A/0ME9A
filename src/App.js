import React from 'react'
import './App.sass'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio'
import Error from './Components/Error/Error'
import ActiveRepo from './Components/ActiveRepo/ActiveRepo'
import BackgroundDesign from './Components/BackgroundDesign/BackgroundDesign';
import AboutUs from './Pages/About/About';
import ContactUs from './Pages/Contact/Contact'
import Menu from './Components/Menu/Menu';

export const ToggleMenuContext = React.createContext()
function App() {

  function PageHandler(probs) {
    return (
      <div className='main-container'>
        <Menu />
        <probs.comp />
      </div>
    )
  }

  return (
    <>
      <BackgroundDesign />
      <Routes>
        <Route path='/' >
          <Route index element={<PageHandler comp={Home} />} />
          <Route path='about' element={<PageHandler comp={AboutUs} />} />
          <Route path='portfolio' element={<PageHandler comp={Portfolio} />} />
          <Route path='contact' element={<PageHandler comp={ContactUs} />} />
          <Route path='*' element={<PageHandler comp={Error} />} />
          <Route path={'portfolio/:id'} element={<PageHandler comp={ActiveRepo} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App