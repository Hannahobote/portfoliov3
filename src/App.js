import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Projects from './pages/Projects'
import Error from './pages/Error.js'
import Mynavbar from './components/Mynavbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App ">
      <Mynavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App;
