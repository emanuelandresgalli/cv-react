import React  from "react";
import "../More/More.css";

const More = ({languages, habilities, volunteer, idiomas }) => {
    return (
        <div>
        <div className="contenedor_tecnologias">
            <p className="negrita"> <img className="iconos" src="./imagenes/icons8-html-5-96.png" alt="" /> {habilities[0]}</p>
            <p className="negrita"> <img className="iconos" src="./imagenes/icons8-css3-96.png" alt="" /> {habilities[1]}</p>
            <p className="negrita"> <img className="iconos" src="./imagenes/icons8-javascript-96.png" alt="" />{habilities[2]}</p>
            <p className="negrita"> <img className="iconos" src="./imagenes/icons8-nodejs-96.png" alt="" />{habilities[3]}</p>
            <p className="negrita"> <img className="iconos" src="./imagenes/icons8-angularjs-96.png" alt="" /> {habilities[4]}</p>
            <p className="negrita"> <img className="iconos" src="./imagenes/favicon.ico" alt="" /> {habilities[5]}</p>
            <p className="negrita"> <img className="iconos" src="./imagenes/icons8-php-100.png" alt="" /> {habilities[6]}</p>
            <br />
            <p className="negrita"> <img className="iconos" src="./imagenes/icons8-usa-96.png" alt="" /> {languages.language} </p>
            <p> ({languages.wrlevel}) </p>
            <p className="negrita"> <img className="iconos" src="./imagenes/icons8-spain-96.png" alt="" /> {idiomas.language} </p>
            <p> ({idiomas.wrlevel}) </p>
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