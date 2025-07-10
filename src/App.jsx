import { useState } from 'react'
import './App.css'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import { Routes, Route } from 'react-router-dom';
import Appartements from '../pages/Appartements.jsx';
import Apropos from '../pages/Apropos.jsx';
import Error404 from '../pages/Error404.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (     
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infos" element={<Apropos />} />
        <Route path='/appartements' element={<Appartements />}/>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Layout>
  )
}

export default App


