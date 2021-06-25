import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const responseURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const getPlanetsAPI = async () => {
    const response = await fetch(responseURL);
    const responseJSON = await response.json();
    setData(responseJSON.results);
  };

  useEffect(() => {
    getPlanetsAPI();
  }, []);

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const context = { data,
    handleChange,
    filters: {
      filterByName: {
        name: input,
      },
    },
  };

  return (
    <TableContext.Provider
      value={ context }
    >
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableProvider;
