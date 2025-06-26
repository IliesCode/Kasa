import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import Headpicture from "../components/Headpicture"
import Main from '../components/Main'
import Footer from '../components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='app-container'>
      <Navbar />
      <Headpicture />
      <Main/>
      </div>
      <Footer/>
      </div>
  )
}

export default App
