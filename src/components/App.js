import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
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

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((promise) => {
      console.log(promise, promise.data);
      setPersons(promise.data);
    });
  }, []);

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

// me demoré 2 horas haciendo estos ejercicios (2.6-2.10)
//2.11 necesita de este proyecto
//me demoré 30 minutos haciendo este ejercicio (2.11)

export default App;
