import React, { useState } from "react";

function Experience({ onSubmit }) {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    duration: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
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
      <h2>Experience</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Duration:
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="card">
          <p>
            <strong>Company:</strong> {formData.company}
          </p>
          <p>
            <strong>Position:</strong> {formData.position}
          </p>
          <p>
            <strong>Duration:</strong> {formData.duration}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;
