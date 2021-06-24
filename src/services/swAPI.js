const SW_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanetsAPI = () => (
  fetch(SW_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanetsAPI;
