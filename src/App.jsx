import React, { useState } from "react";
import "./App.css";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Final from "./components/Final";

function App() {
  const [formData, setFormData] = useState({
    personal: {},
    education: {},
    experience: {},
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Form submitted!", formData);
    // You can now pass formData to the Final component
  };

  const handlePersonalChange = (data) => {
    setFormData((prev) => ({ ...prev, personal: data }));
  };

  const handleEducationChange = (data) => {
    setFormData((prev) => ({ ...prev, education: data }));
  };

  const handleExperienceChange = (data) => {
    setFormData((prev) => ({ ...prev, experience: data }));
  };

  return (
    <>
      <div className="application">
        <form onSubmit={handleSubmit}>
          <Personal onChange={handlePersonalChange} />
          <Education onChange={handleEducationChange} />
          <Experience onChange={handleExperienceChange} />
          <button type="submit">Submit</button>
        </form>
        <Final formData={formData} />
      </div>
    </>
  );
}

export default App;
