import './App.css';
import 'antd/dist/antd.min.css'
import {Routes,  Route, Link} from 'react-router-dom';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import GitBasics from './pages/GitBasics'
import Error from './pages/Error.js'
import Mynavbar from './components/Mynavbar';
import { DatePicker } from 'antd';


function App() {

  return (
    <div className="App">
        <nav>
          <Link to="/blog">blog</Link>
        </nav>
        <DatePicker />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            {/*nested routes for blog*/}
            <Route path="/blog" element={<Blog/>}> 
              <Route path="blog/git-basics" element={<GitBasics/>}></Route>
            </Route>
    
            <Route path="*" element={<Error/>} />
        </Routes>
    </div>
  )
}

export default App;
