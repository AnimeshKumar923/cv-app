import React, { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

function App() {
  const [personalData, setPersonalData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [experienceData, setExperienceData] = useState(null);

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <Personal onSubmit={setPersonalData} />
      <Education onSubmit={setEducationData} />
      <Experience onSubmit={setExperienceData} />

      <Resume
        personal={personalData}
        education={educationData}
        experience={experienceData}
      />
    </div>
  );
}

export default App;
