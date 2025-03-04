import React, { useState } from "react";
import listeCommand from "../hooks/listeCommand";
import Donnee from "../hooks/donnee.js";

const Texte = (props) => {
  const [commande, setCommande] = useState(""); // Stock la commande du terminal
 // Gere la récupération de la commande 
 const handlePrompt = (evt) => {
  setCommande(evt.target.value);
  
};
  // Gere l'envoi vers les actions du jeu 
  const handlePromptSoumis = (evt) => {
   evt.preventDefault();
   console.log(commande);
   const cmdListe = commande.split(" ")
   console.log(cmdListe)
   if (cmdListe.length === 3) { // Si un id existe 
     listeCommand(cmdListe)
   }
   else{
     cmdListe.push("")
     cmdListe.push("0")

     listeCommand(cmdListe)
   }

 };

 const listeCmdLevel = props.texteLevel[1].map((ele) => ele.cmd + " " + ele.action + " ")

  return (
    <section className="texte">
      <p className="texte__dialogue">{props.texteLevel[0]}</p>
      <p className="texte__instruction">{listeCmdLevel}</p>
      <form className="texte__interaction" onSubmit={handlePromptSoumis}>
        <label htmlFor="commande" className="texte__hote">
          lejoueur@sda <span className="texte__hote--chemin">~</span>
          <span className="texte__hote--utilisateur">$</span>
        </label>
        <input
          type="text"
          name="commande"
          id="commande"
          className="texte__commande"
          placeholder="_"
          value={commande}
          onChange={handlePrompt}
        />
      </form>
    </section>
  );
};

export default Texte;
