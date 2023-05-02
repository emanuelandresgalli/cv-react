import React  from "react";
import "../More/More.css";

const More = ({languages, habilities, volunteer }) => {
    return (
        <div>
        <div className="contenedor_tecnologias">
            <p className="negrita">{habilities[0]}</p>
            <p className="negrita">{habilities[1]}</p>
            <p className="negrita">{habilities[2]}</p>
            <p className="negrita">{habilities[3]}</p>
            <p className="negrita">{habilities[4]}</p>
            <p className="negrita">{habilities[5]}</p>
            <p className="negrita">{habilities[6]}</p>
            <p className="negrita"> {languages.language} </p>
            <p> ({languages.wrlevel}) </p>
        </div>
        <div>
            <p className="negrita">{volunteer[0].name}</p>
            <p >{volunteer[0].where}</p>
            <p >{volunteer[0].description}</p>
        </div>
        </div>
    )
}

export default More;