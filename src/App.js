import './App.css';
import 'antd/dist/antd.css'
import {Routes,  Route} from 'react-router-dom';
import Home from './components/Home.js'
import PageNotFound from './components/PageNotFound.js'
import Mynavbar from './components/Mynavbar';
import { DatePicker } from 'antd';


function App() {

  return (
    <div className="App">
      <Mynavbar />
      <DatePicker />
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
