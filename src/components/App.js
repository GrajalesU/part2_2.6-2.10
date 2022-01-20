import React, { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [nameFilter, setNameFilter] = useState("");

  const handleFilter = (e) => {
    setNameFilter(e.target.value);
  };

  const handleNewPerson = (e) => {
    e.preventDefault();
    const numberExists = persons.some(
      (person) => person.number === newPerson.number
    );
    if (numberExists) {
      alert(
        "This number already exists to other person, try with other number..."
      );
      return;
    }
    setPersons([...persons, newPerson]);
    setNewPerson({ name: "", number: "" });
  };

  const handleChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        handleNewPerson={handleNewPerson}
        newPerson={newPerson}
        handleChange={handleChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} />
    </div>
  );
};

// me demoré 2 horas haciendo estos ejercicios

export default App;
