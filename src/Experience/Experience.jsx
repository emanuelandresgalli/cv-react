import React  from "react";
import "../Experience/Experience.css";

const Experience = ({ experience }) => {
    return (
      <div>
        <div className="contenedor_education" >
        <div className="experience_card">
          {experience.map((item)=>{
            return (
              <div key={JSON.stringify(item)}>
                <p className="name">{item.name}</p>
                <p>{item.date}</p>
                <p>{item.where}</p>
                <p>{item.description}</p>
                </div>
            );
          })}
        </div>
        </div>
      </div>
      );
  };

  export default Experience;