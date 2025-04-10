import { useState } from "react";

function Education() {
  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 3);

  const [eduData, setEduData] = useState({
    school: "",
    title: "",
    date: defaultDate,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...personalData, [name]: value };
    setPersonalData(updatedData);
    onChange(updatedData); // Notify parent of the change
  };

  return (
    <>
      <div className="education">
        <h2>Educational Qualifications</h2>
        <label>
          School Name: <input type="text" id="school_name" required />
        </label>
        <br />
        <label>
          Title of Study: <input type="text" id="study_title" required />
        </label>
        <br />
        <label>
          Date of study: <input type="date" id="study_date" required />
        </label>
      </div>
    </>
  );
}

export default Education;
