function Resume({ personal, education, experience }) {
  if (!personal && !education && !experience) return null;

  return (
    <div className="resume-preview">
      <h2>Preview</h2>
      {personal && (
        <div>
          <h3>Personal Info</h3>
          <p>Name: {personal.name}</p>
          <p>Email: {personal.email}</p>
          <p>Phone: {personal.phone}</p>
        </div>
      )}
      {education && (
        <div>
          <h3>Education</h3>
          <p>School: {education.school}</p>
          <p>Degree: {education.degree}</p>
          <p>Year: {education.year}</p>
        </div>
      )}
      {experience && (
        <div>
          <h3>Experience</h3>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Duration: {experience.duration}</p>
        </div>
      )}
    </div>
  );
}

export default Resume;
