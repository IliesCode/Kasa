import { useState } from 'react'
import Headpicture from "../components/Headpicture"
import Main from '../components/Main'
import "./Home.css"
import HomeImage from "../src/assets/HeadPic.jpg";


function Home() {
  const [count, setCount] = useState(0)

  return (    
      <div className='app-container'>
      <Headpicture image={HomeImage} title={"Chez vous, partout et ailleurs"} extraClass=""/>
      <Main/>
      </div>
  )
}

export default Home