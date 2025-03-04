import React, { useState } from "react";
import Ecran from "./Ecran";
import Texte from "./Texte";




const Jeu = (props) => {
console.log(props.donnee)
 const [idLevel, setIdLevel] = useState(props.donnee.saves[0]["niveau-id"]) // Stock l'id du niveau courant 
 const [imageLevel,setImageLevel] = useState([props.donnee.levels[idLevel].image,props.donnee.levels[idLevel]["nom-niveau"]]) // Stock l'image et son nom (alt) du niveau courant
 const [texteLevel, setTexteLevel] = useState([props.donnee.levels[idLevel].description,props.donnee.levels[idLevel]["liste-cmd"]]) // Stock la description et la liste des commandes du niveau courant



    return <section className="jeu">
        <Ecran imageLevel={imageLevel} idLevel={idLevel} />
        <Texte texteLevel={texteLevel} idLevel={idLevel} />
    </section>
}

export default Jeu;