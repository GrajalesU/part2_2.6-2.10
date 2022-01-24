import axios from "axios";

const DB_URL = "/api/persons";
export const getAll = () => {
  return axios.get(DB_URL).then((response) => response.data);
};

export const create = (newPerson) => {
  const aNewPerson = { ...newPerson, id: crypto.randomUUID() };
  return axios.post(DB_URL, aNewPerson).then((response) => response.data);
};

export const update = (person, newNumber) => {
  return axios.put(`${DB_URL}/${person.id}`, {
    ...person,
    number: newNumber,
  });
};

export const del = (id) => {
  return axios.delete(`${DB_URL}/${id}`).then((response) => response.data);
};
