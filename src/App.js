import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import GitBasics from './pages/GitBasics'
import Error from './pages/Error.js'
import Mynavbar from './components/Mynavbar';
// const { Header, Footer } = Layout

function App() {
 
  return (
    <div className="App">
          <Mynavbar style={{marginTop: '10px'}} />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          {/*nested routes for blog*/}
          <Route path="blog" element={<Blog />}>
            <Route path="git" element={<GitBasics />}></Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
    </div>
  )
}

export default App;
