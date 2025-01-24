import React, { useState } from "react";
import listeCommand from "../hooks/listeCommand";

const Texte = () => {
  const [commande, setCommande] = useState(""); // Stock la commande du terminal
  const [idLevel, setIdLevel] = useState(0) // Stock l'id du niveau courant 
  const [imageLevel, setImageLevel] = useState(["", ""]) // Stock l'image et son nom (alt)
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
  return (
    <section className="texte">
      <p className="texte__dialogue">Texte</p>
      <p className="texte__instruction">Ici liste des commandes</p>
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
