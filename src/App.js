import './App.css';
import { Navbar } from './components/Navbar'
import { MyHeader } from './components/MyHeader'

function App() {
  const name = 'hannah'
  return (
    <div className="App">
      hi its {name}
      <Navbar></Navbar>
    </div>
  )
}

export default App;
