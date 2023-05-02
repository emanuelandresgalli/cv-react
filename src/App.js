import "./App.css";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import More from "./More/More";
import CV from "./CV/CV";
import { useState } from "react";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero.aboutMe}/>
      {/* <Education education={education} />
      <Experience experience={experience}/> */}
      <More languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
      <button
        className="botones"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="botones"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
    </div>
  );
}

export default App;
