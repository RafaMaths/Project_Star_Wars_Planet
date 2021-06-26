import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    column: 'population',
    comparison: 'maior que',
    number: 0,
  });

  // função que chama a API
  const responseURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const getPlanetsAPI = async () => {
    const response = await fetch(responseURL);
    const responseJSON = await response.json();
    setData(responseJSON.results);
  };

  // renderiza a API
  useEffect(() => {
    getPlanetsAPI();
  }, []);

  // value do Input
  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  // seleciona valores do select
  const handleSelect = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
    console.log(filters);
  };

  const handleClick = () => {
    const { column, comparison, number } = filters;

    // const test = (parseInt(comparison, 10));
    // console.log(test);

    const filterData = data.filter((e) => {
      if (comparison === 'maior que') {
        console.log(typeof (Number(e[column])));

        return Number(e[column]) > Number(number);
      }
      if (comparison === 'menor que') {
        return Number(e[column]) < Number(number);
      }
      return Number(e[column]) === Number(number);
    });
    setData(filterData);
  };

  const context = { data,
    handleChange,
    filters: {
      filterByName: {
        name: input,
      },
    },
    handleSelect,
    handleClick,
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
