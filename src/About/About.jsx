import React  from "react";
import "../About/About.css";

const About = ({hero}) => {
        return (
            <div className="sobre_mi">
              <p> <img className="iconos" src="./imagenes/icons8-hombre-popular-96.png" alt="" /> {hero.map((item)=>item.info)}</p>
              <p> <img className="iconos" src="./imagenes/icons8-handshake-skin-type-3-100.png" alt="" /> {hero.map((item)=>item.info1)}</p>
              <p> <img className="iconos" src="./imagenes/icons8-buena-decisión-64.png" alt="" /> {hero.map((item)=>item.info2)}</p>
              <p> <img className="iconos" src="./imagenes/icons8-gente-trabajando-juntos-64.png" alt="" /> {hero.map((item)=>item.info3)}</p>
            </div>
    )
}

export default About;