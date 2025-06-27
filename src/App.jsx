import { useState } from 'react'
import './App.css'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import { Routes, Route } from 'react-router-dom';
import Appartements from '../pages/Appartements.jsx';
import Apropos from '../pages/Apropos.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (     
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infos" element={<Apropos />} />
      </Routes>
    </Layout>
  )
}

export default App


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/appartements" element={<div>Test</div>} />
//         <Route path="/APropos" element={<div>infos</div>} />
//         <Route path="/Erreur" element={<div>404</div>} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );
