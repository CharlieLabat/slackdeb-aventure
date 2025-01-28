import React, { useState } from "react";
import Ecran from "./Ecran";
import Texte from "./Texte";
import Donnee from "../data/data.json";


const Jeu = () => {

 const [idLevel, setIdLevel] = useState(0) // Stock l'id du niveau courant 
 const [imageLevel,setImageLevel] = useState([Donnee.levels[idLevel].image,Donnee.levels[idLevel]["nom-niveau"]]) // Stock l'image et son nom (alt) du niveau courant
 const [texteLevel, setTexteLevel] = useState([Donnee.levels[idLevel].description,Donnee.levels[idLevel]["liste-cmd"]]) // Stock la description et la liste des commandes du niveau courant



    return <section className="jeu">
        <Ecran imageLevel={imageLevel} idLevel={idLevel} />
        <Texte texteLevel={texteLevel} idLevel={idLevel} />
    </section>
}

export default Jeu;