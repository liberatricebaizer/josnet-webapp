// api.js
export const getCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data.map((country) => ({
    code: country.cca2,
    name: country.name.common,
  }));
};
