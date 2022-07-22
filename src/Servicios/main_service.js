import axios from "axios";

const base_url = "https://www.thecocktaildb.com/api/json/v1/1/"; // faltaba el 'https://'

const getRandomDrink = async() => {
  let result = await axios.get(`${base_url}random.php`);
  return result.data.drinks; // de esta forma devuelve arrays de tragos
};

// servicio para buscar tragos: search.php?s=margarita => margarita va a ser el dato que le pasas al servicio

// servicio para buscar tragos por ingredientes: filter.php?i=Gin => igual aca con gin

export const tragosService = {
  getRandomDrink
};
