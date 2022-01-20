import React from "react";

const PersonForm = ({ handleNewPerson, newPerson, handleChange }) => {
  return (
    <form onSubmit={handleNewPerson}>
      <div>
        name :{" "}
        <input
          name="name"
          value={newPerson.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        number :{" "}
        <input
          name="number"
          value={newPerson.number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
