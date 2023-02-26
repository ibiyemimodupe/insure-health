import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Text from "./components/Text";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <div className="head">
                  <Header />
                </div>
                <div className="border-cont">
                  <Hero />
                </div>
                <Hero1 />
                <Hero2 />
                <Hero3 />
                <div id="slide">
                  <Text />
                </div>
                <Footer />
              </>
            }
          />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route 
            path='/home' 
            element={
              <>
             <Home />
             <Footer />
             </>
            } 
          />
          <Route
            path='/about'
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
