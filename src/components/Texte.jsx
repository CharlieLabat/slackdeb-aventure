import React from "react";

const Texte = () => {
  return (
    <section className="texte">
      <p className="texte__dialogue">Texte</p>
      <label htmlFor="commande" className="texte__hote"></label>
      <input type="text" name="commande" id="commande" className="texte__commande" />
    </section>
  );
};

export default Texte;
