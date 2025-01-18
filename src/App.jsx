import React from 'react'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Clients from './components/Clients/Clients';
import Residencies from './components/Residencies/Residencies';
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact"
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>


      <Header />
      <Home />
      <Clients />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted/>
      <Footer/>


    </>

  )
}

export default App