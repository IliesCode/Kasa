import { useState } from 'react'
import { NavLink } from "react-router";
import Headpicture from "../components/Headpicture";
import "./Apropos.scss"
import AproposImage from "../src/assets/Apropos.png"
import aproposData from "../aproposData.json"
import MenuDeroulant from '../componentsPageAppart/MenuDeroulant';

function Apropos() {



  return (    
      <div >
    <Headpicture image={AproposImage} title={""} extraClass="headHeight"/>
    <div className='center'>
    <div className='categorie'>


    <div className='style'>
<div className="a-propos">
      {aproposData.map((valeur, index) => (
        <MenuDeroulant
          key={index}
          title={valeur.titre}
          content={valeur.contenu}
        />
      ))}
    </div>


    </div>







</div>


    </div>
      </div>
  )
}

export default Apropos


