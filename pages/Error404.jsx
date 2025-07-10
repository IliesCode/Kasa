import React from 'react'
import "./Error404.scss"
import { NavLink } from "react-router";

function Error404() {
  return (
    <div className='error'>
        <h1>404</h1>

        <h2>Oups! La page que vous demandez n'existe pas.</h2>

        <NavLink to="/">
        <p>Retourner sur la page d'accueil</p></NavLink>
    </div>
  )
}

export default Error404