import React, { useState } from "react";

function Experience({ onChange }) {
  const [expData, setExpData] = useState({
    company: "",
    position: "",
    responsibilities: "",
    fromMonth: "",
    toMonth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...expData, [name]: value };
    setExpData(updatedData);
    onChange(updatedData); 
  };
  return (
    <>
      <div className="experience">
        <h2>Work Experience</h2>
        <label>
          Company Name:
          <input
            type="text"
            name="company"
            value={expData.company}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Position:
          <input
            type="text"
            name="position"
            value={expData.position}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Responsibilities:
          <input
            type="text"
            name="responsibilities"
            value={expData.responsibilities}
            onChange={handleChange}
          />
        </label>
        <br />

        <h3>Duration</h3>
        <label>
          From:
          <input
            type="text"
            name="fromMonth"
            value={expData.fromMonth}
            onChange={handleChange}
          />
          To:
          <input
            type="text"
            name="toMonth"
            value={expData.toMonth}
            onChange={handleChange}
          />
        </label>
      </div>
    </>
  );
}

export default Experience;
