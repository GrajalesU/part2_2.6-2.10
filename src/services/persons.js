import axios from "axios";

const DB_URL = "http://localhost:3001/persons";

export const getAll = () => {
  return axios.get(DB_URL).then((response) => response.data);
};

export const create = (newPerson) => {
  return axios.post(DB_URL, newPerson).then((response) => response.data);
};

export const update = (number, newPerson) => {
  del(number);
  create(newPerson);
}; // I don't use axios put method because my primaryKey is the number of person

export const del = (number) => {
  return axios.delete(`${DB_URL}/${number}`).then((response) => response.data);
};
