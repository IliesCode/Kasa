import react from "react";
import "./ListeAppartements.scss"
import Appartements from "./Appartements";
import { NavLink } from "react-router";


function ListeAppartements() {
return(
<div className="grid">
<NavLink to="/appartements">
<Appartements />
</NavLink> 
<NavLink to="/appartements">
<Appartements />
</NavLink> <NavLink to="/appartements">
<Appartements />
</NavLink> <NavLink to="/appartements">
<Appartements />
</NavLink> 
<NavLink to="/appartements">
<Appartements />
</NavLink> 
</div>
)
}

export default ListeAppartements