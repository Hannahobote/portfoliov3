import './App.css';
import {Routes,  Route} from 'react-router-dom';
// import MyHeader from './components/MyHeader.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import PageNotFound from './components/PageNotFound.js'
import Mynavbar from './components/Mynavbar';
import ComingSoon from './components/ComingSoon';

function App() {

  return (
    <div className="App">
      <Mynavbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/comingsoon" element={<ComingSoon/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App;
