import React from 'react'
import './App.css';
import 'antd/dist/antd.min.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import GitBasics from './pages/GitBasics'
import Error from './pages/Error.js'
import Footer from './components/Footer.js'
import Mynavbar from './components/Mynavbar';
import { Layout, Row, Col, Divider, Typography} from 'antd';
//import { Footer } from 'antd/lib/layout/layout';
// const { Header, Footer } = Layout
const {Title} = Typography

function App() {

  return (
    <div className="App">
      <Layout style={{ backgroundColor: '#fff' }}>
        <Mynavbar style={{ marginTop: '10px' }} />

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

        <Footer />
      </Layout>
    </div>
  )
}

export default App;
