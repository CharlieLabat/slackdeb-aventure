import React from "react";

const Texte = () => {
  return (
    <section className="texte">
      <p className="texte__dialogue">Texte</p>
      <p className="texte__instruction">Ici liste des commandes</p>
      <div className="texte__interaction">
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
        />
      </div>
    </section>
  );
};

export default Texte;
