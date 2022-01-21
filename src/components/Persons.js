import React from "react";

const Persons = ({ persons, nameFilter }) => {
  return (
    <ul>
      {persons
        .filter(({ name }) => {
          return name.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1;
        })
        .map(({ name, number, id }) => (
          <li key={id}>
            {name} - {number}
          </li>
        ))}
    </ul>
  );
};

export default Persons;
