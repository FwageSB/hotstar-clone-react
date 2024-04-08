import './App.css'
import Menubar from './components/Menubar'
import Home from './components/Home'

function App() {
  return (
  <div className='app'>
    <Menubar />
    <div className='app_main'>
    <Home />
    </div>
  </div>
  )
}

export default App
