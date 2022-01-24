import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Notification from "./Notification";
import { getAll, create, del, update } from "../services/persons";
import "../App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
    id: "",
  });
  const [nameFilter, setNameFilter] = useState("");
  const [notification, setNotification] = useState(null);

  const handleFilter = (e) => {
    setNameFilter(e.target.value);
  };

  const handleNewPerson = (e) => {
    e.preventDefault();
    const numberExists = persons.some(
      ({ number }) => number === newPerson.number
    );
    if (numberExists) {
      alert(
        "This number already exists to other person, try with other number..."
      );
      return;
    }
    const sameNamePerson = persons.find(({ name }) => name === newPerson.name);
    if (sameNamePerson) {
      const response = window.confirm(
        `${sameNamePerson.name} is already added to phonebook, replace the old number with a new one`
      );
      if (response) {
        update(sameNamePerson, newPerson.number);
        setNotification(`${newPerson.name} number was modified...`);
        setTimeout(() => {
          setNotification(null);
        }, 3000);
        const filteredPersons = persons.filter(({ name }) => {
          return name !== sameNamePerson.name;
        });
        setPersons([...filteredPersons, newPerson]);
        setNewPerson({ name: "", number: "", id: "" });
      }
      return;
    }
    create(newPerson).then((response) => {
      setNotification(`${newPerson.name} was created...`);
      setTimeout(() => {
        setNotification(null);
      }, 3000);
      setPersons([...persons, response]);
      setNewPerson({ name: "", number: "", id: "" });
    });
  };

  const handleChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };

  const handleDelete = (e) => {
    const selectedPerson = persons.find(({ id }) => {
      return id === e.target.id;
    }).name;
    const isAgree = window.confirm(
      `do you really want to delete ${selectedPerson}`
    );
    if (isAgree) {
      del(e.target.id).then(() => {
        setPersons(
          persons.filter(({ id }) => {
            return id !== e.target.id;
          })
        );
        setNotification(`${selectedPerson} was deleted...`);
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      });
    }
  };

  useEffect(() => {
    getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <Notification message={notification} setNotification={setNotification} />
      <h2>Phonebook</h2>

      <Filter handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        handleNewPerson={handleNewPerson}
        newPerson={newPerson}
        handleChange={handleChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} del={handleDelete} />
    </div>
  );
};

// me demoré 2 horas haciendo estos ejercicios (2.6-2.10)
//2.11 necesita de este proyecto
//me demoré 30 minutos haciendo este ejercicio (2.11)
//2.15-2.18 necesitan de este proyecto
// me demoré 2 horas haciendo estos ejercicios (2.15-2.18)
//2.19-2.20 necesitan de este proyecto
// me demoré 30 hora haciendo el ejercicio 2.19

export default App;
