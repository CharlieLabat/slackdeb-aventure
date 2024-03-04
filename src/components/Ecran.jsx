import React from "react";
import EcranMaison from "../assets/images/EcranMaison.png";

const Ecran = () => {
    return <section className="ecran">
        <figure className="ecran__image">
            <img src={EcranMaison} alt="Ecran" />
        </figure>
    </section>
}

export default Ecran;