import React, { useState } from "react";

function Personal({ onChange }) {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...personalData, [name]: value };
    setPersonalData(updatedData);
    onChange(updatedData); // Notify parent of the change
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={personalData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={personalData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={personalData.phone}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default Personal;
