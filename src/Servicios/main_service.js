import axios from "axios";

const base_url = "https://www.thecocktaildb.com/api/json/v1/1/"; // faltaba el 'https://'

const getRandomDrink = async () => {
  let result = await axios.get(`${base_url}random.php`);
  return result.data.drinks; // de esta forma devuelve arrays de tragos
};


const getSerchDrink = async (nobreTrago) => {
  let result = await axios.get(`${base_url}search.php?s=${nobreTrago}`);
  return result.data.drinks; // de esta forma devuelve arrays de tragos
};

// servicio para buscar tragos por ingredientes: filter.php?i=Gin => igual aca con gin
const getSerchIngredient = async (nobreIngrediente) => {

  let result = await axios.get(`${base_url}filter.php?i=${nobreIngrediente}`);
  return result.data.drinks;
}

export const tragosService = {
  getRandomDrink,
  getSerchDrink,
  getSerchIngredient
};
