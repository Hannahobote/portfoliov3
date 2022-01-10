import './App.css';
import {Routes,  Route} from 'react-router-dom';
import Home from './components/Home.js'
import PageNotFound from './components/PageNotFound.js'
import Mynavbar from './components/Mynavbar';


function App() {

  return (
    <div className="App">
      <Mynavbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            {/*
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/comingsoon" element={<ComingSoon/>} />            
            */}
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </div>
  )
}

export default App;
