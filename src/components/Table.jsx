import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { data, handleChange, handleSelect, handleClick,
    filters: { filterByName: { name } } } = useContext(TableContext);
  return (
    <div>
      <input data-testid="name-filter" onChange={ handleChange } />
      <select
        id=""
        name="column"
        data-testid="column-filter"
        onChange={ handleSelect }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        id=""
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleSelect }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>

      </select>

      <input
        name="number"
        maxle
        type="number"
        data-testid="value-filter"
        onChange={ handleSelect }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtro
      </button>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((filter) => filter.name.includes(name))
            .map((input) => (
              <tr key={ input.name }>
                <td>{input.name}</td>
                <td>{ input.rotation_period }</td>
                <td>{ input.orbital_period }</td>
                <td>{ input.diameter }</td>
                <td>{ input.climate }</td>
                <td>{ input.gravity }</td>
                <td>{ input.terrain }</td>
                <td>{ input.surface_water }</td>
                <td>{ input.population }</td>
                <td>{ input.films }</td>
                <td>{ input.created }</td>
                <td>{ input.edited }</td>
                <td>{ input.url }</td>
              </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
