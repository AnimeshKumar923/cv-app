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
      <p>{education.degree}</p>
      <p>{education.school}</p>
      <p>{education.year}</p>

      <h2>Experience</h2>
      <p>{experience.company}</p>
      <p>{experience.role}</p>
      <p>{experience.duration}</p>
    </div>
  );
}

export default Final;
