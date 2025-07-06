import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <div className='sticky top-0 z-1 w-full'>
      <Navbar></Navbar>
    </div>
    <div className='max-w-[1320px] m-auto px-4 md:px-4 lg:px-0'>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
