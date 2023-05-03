import React  from "react";
import "../Hero/Hero.css";

const Hero = ({hero}) => {
    return (
        <div className="Hero">

            <img src={hero.image} alt="" />

            <div className="card">
      <h2>
        {hero.name} {hero.adress}
      </h2>
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
        <p>
          
          <a href={"mailto:" + hero.email}> <img className="iconos" src="./imagenes/icons8-correo-64.png" alt=""/>
          emanuelandresgalli@gmail.com
          </a>
        </p>
        <p> <img className="iconoss" src="/imagenes/icons8-teléfono-celular-50.png" alt=""/> {hero.phone}</p>
        <p> <img className="iconos" src="./imagenes/icons8-github-48.png" alt=""/> <a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
        </div>
    )
}

export default Hero