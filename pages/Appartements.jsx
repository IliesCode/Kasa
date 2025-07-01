import { useState } from 'react'
import "../componentsPageAppart/Host"
import "./Appartements.scss"
import Host from '../componentsPageAppart/Host'
import InfosAppartement from '../componentsPageAppart/InfosAppartement'
import Caroussel from '../componentsPageAppart/Caroussel'
import DescriptionEquipements from '../componentsPageAppart/DescriptionEquipements'

function Appartements() {
  const [count, setCount] = useState(0)

  return (    
     <div>
      <Caroussel />
      <div className='infosHote'>
      <InfosAppartement/>
      <Host />
      </div>

      <DescriptionEquipements />

      </div>

  )
}

export default Appartements