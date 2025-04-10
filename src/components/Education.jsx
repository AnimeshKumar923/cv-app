import { useState } from "react";

function Education({ onChange }) {
  // let defaultDate = new Date();
  // defaultDate.setDate(defaultDate.getDate());

  const [eduData, setEduData] = useState({
    schoolName: "",
    studyTitle: "",
    studyDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...eduData, [name]: value };
    setEduData(updatedData);
    onChange(updatedData);
  };

  return (
    <>
      <div className="education">
        <h2>Educational Qualifications</h2>
        <label>
          School Name:
          <input
            type="text"
            name="schoolName"
            value={eduData.schoolName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Title of Study:
          <input
            type="text"
            name="studyTitle"
            value={eduData.studyTitle}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date of study:
          <input
            type="text"
            name="studyDate"
            value={eduData.studyDate}
            onChange={handleChange}
          />
        </label>
      </div>
    </>
  );
}

export default Education;
