import React, { useState } from "react";

function Education({ onSubmit }) {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    graduationYear: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Updating", name, "to", value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmit(formData);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  return (
    <div className="section">
      <h2>Education</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            School:
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Graduation Year:
            <input
              type="text"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="card">
          <p>
            <strong>School:</strong> {formData.school}
          </p>
          <p>
            <strong>Degree:</strong> {formData.degree}
          </p>
          <p>
            <strong>Graduation Year:</strong> {formData.graduationYear}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
