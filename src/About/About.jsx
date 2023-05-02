import React  from "react";
import "../About/About.css";

const About = ({hero}) => {
        return (
            <div className="sobre_mi">
              <p>{hero.map((item)=>item.info)}</p>
              <p>{hero.map((item)=>item.info1)}</p>
              <p>{hero.map((item)=>item.info2)}</p>
              <p>{hero.map((item)=>item.info3)}</p>
            </div>
    )
}

export default About;