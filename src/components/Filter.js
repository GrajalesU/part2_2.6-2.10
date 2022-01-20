import React from "react";

const Filter = ({ handleFilter }) => {
  return (
    <>
      filter shown with name like : <input onChange={handleFilter} />
    </>
  );
};

export default Filter;
