import React from "react";

const Persons = ({ persons, nameFilter, del }) => {
  return (
    <ul>
      {persons
        .filter(({ name }) => {
          return name.toLowerCase().includes(nameFilter.toLowerCase());
        })
        .map(({ name, number }) => (
          <li key={number}>
            {name} - {number}
            <button id={number} onClick={del}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Persons;
