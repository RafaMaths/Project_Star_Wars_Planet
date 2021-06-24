import React, { useEffect, useState } from 'react';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);

  const responseURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const getPlanetsAPI = async () => {
    const response = await fetch(responseURL);
    const responseJSON = await response.json();
    setData(responseJSON.results);
  };
  console.log(data);

  useEffect(() => {
    getPlanetsAPI();
  }, []);

  return (
    <TableContext.Provider
      value={ {/* ...state */ } }
    >
      { children }
    </TableContext.Provider>
  );
}

export default TableProvider;
