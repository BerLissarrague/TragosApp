import axios from "axios";

const base_url = "https://www.thecocktaildb.com/api/json/v1/1/"; // faltaba el 'https://'

const getRandomDrink = async () => {
  let result = await axios.get(`${base_url}random.php`);
  return result.data.drinks;
};

const getSearchDrink = async (nobreTrago) => {
  let result = await axios.get(`${base_url}search.php?s=${nobreTrago}`);
  return result.data.drinks;
};

const getSearchIngredient = async (nobreIngrediente) => {

  let result = await axios.get(`${base_url}filter.php?i=${nobreIngrediente}`)
  return result.data.drinks;
}
const getIdDrinks = async (id) => {
  let result = await axios.get(`${base_url}lookup.php?i=${id}`);
  return result.data.drinks;
}

export const tragosService = {
  getRandomDrink,
  getSearchDrink,
  getSearchIngredient,
  getIdDrinks
};
