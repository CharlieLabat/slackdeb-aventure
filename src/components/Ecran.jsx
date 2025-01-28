import React, { useState } from "react";

const Ecran = (props) => {
  

    return <section className="ecran">
        <figure className="ecran__image">
            <img src={props.imageLevel[0]} alt={props.imageLevel[1]} />
        </figure>
    </section>
}

export default Ecran;