import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  const responseURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const getPlanetsAPI = async () => {
    const response = await fetch(responseURL);
    const responseJSON = await response.json();
    setData(responseJSON.results);
  };
  // console.log(data);

  useEffect(() => {
    getPlanetsAPI();
  }, []);

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <TableContext.Provider
      value={ { data, handleChange } }
    >
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableProvider;
