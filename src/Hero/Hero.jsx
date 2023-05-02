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
          📧
          <a href={"mailto:" + hero.email}>
          emanuelandresgalli@gmail.com
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>💾<a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
        </div>
    )
}

export default Hero