import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <>
      <p>This is app</p>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
