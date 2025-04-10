import React from "react";

function Final({ formData }) {
  const { personal, education, experience } = formData;

  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>Personal Information</h2>
      <p>Name: {personal.name}</p>
      <p>Email: {personal.email}</p>
      <p>Phone: {personal.phone}</p>

      <h2>Education</h2>
      <p>{education.schoolName}</p>
      <p>{education.studyTitle}</p>
      <p>{education.studyDate}</p>

      <h2>Experience</h2>
      <p>{experience.company}</p>
      <p>{experience.position}</p>
      <p>{experience.responsibilities}</p>
      <p>{experience.fromMonth}</p>
      <p>{experience.toMonth}</p>
    </div>
  );
}

export default Final;
