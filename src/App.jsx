import { Outlet, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'

function App() {

  return (
    <div className="App w-[80%] mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
