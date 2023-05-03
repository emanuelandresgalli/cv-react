import React  from "react";
import "../Education/Education.css";

const Education = ({ education }) => {
  return (
    <div>
      <div className="education_card">
        {education.map((item)=>{
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">{item.name}</p>
              <p>{item.date}</p>
              <p>{item.where}</p>
              </div>
          );
        })}
      </div>
      
    </div>
    );
};

export default Education;