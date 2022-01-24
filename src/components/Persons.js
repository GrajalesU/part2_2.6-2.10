import React from "react";

const Persons = ({ persons, nameFilter, del }) => {
  return (
    <ul>
      {persons
        .filter(({ name }) => {
          return name.toLowerCase().includes(nameFilter.toLowerCase());
        })
        .map(({ name, number, id }) => (
          <li key={id}>
            {name} - {number}
            <button id={id} onClick={del}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Persons;
