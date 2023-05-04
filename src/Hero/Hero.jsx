import React  from "react";
import "../Hero/Hero.css";

const Hero = ({hero}) => {
    return (
      
        <div className="Hero">
          
            <img className="foto" src={hero.image} alt="" />

            <div className="card">
      <h2>
        {hero.name} {hero.adress}
      </h2>
        <p> <img className="iconoss" src="./imagenes/icons8-sagrada-familia-64.png" alt=""/> {hero.city} </p>
        <p> <img className="iconoss" src="./imagenes/icons8-calendario-64.png" alt=""/> {hero.birthDate}</p>
        <p>
          
          <a href={"mailto:" + hero.email}> <img className="iconos" src="./imagenes/icons8-correo-64.png" alt=""/>
          emanuelandresgalli@gmail.com
          </a>
        </p>
        <div className="linkedin">
        <img className="iconoss" src="./imagenes/icons8-linkedin-96.png" alt=""/> <div class="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="emanuel-andrés-galli" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://es.linkedin.com/in/emanuel-andr%C3%A9s-galli?trk=profile-badge">Emanuel Andrés Galli</a></div>
        </div> 
              
        <p> <img className="iconoss" src="/imagenes/icons8-teléfono-celular-50.png" alt=""/> {hero.phone}</p>
        <p> <img className="iconos" src="./imagenes/icons8-github-48.png" alt=""/> <a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
      
              
        </div>
    )
}

export default Hero