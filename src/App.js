import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route exact path="/" element= {
             <>
              <div className="border-cont">
                <Navbar />
              </div>
              <div className="head">
                <Header />
              </div>
              <div className="border-cont">
                <Hero />
              </div>
              <Hero1 />
              <Hero2 />
              <Hero3 />
              <Hero4 />
            </>
          }>
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
