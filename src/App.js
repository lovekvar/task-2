import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import Areas from './components/areas';
import Vision from './components/vision';
import Team from './components/team';
import Contact from './components/contact';
import Form from './components/multi_step_form';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/areas" element={<Areas/>} />
            {/* <Route path="/form/:pageId" element={<Form data={data} setData={fillField}/>} /> */}
            {/* <Route path="/form/"/>
              <Route path=":pageId" element={<Form/>} ></Route> */}
            <Route path="/form" element={<Form/>}/>
            <Route exact path="/vision" element={<Vision/>} />
            <Route exact path="/team" element={<Team/>} />
            <Route exact path="/contact" element={<Contact/>} />
          </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
