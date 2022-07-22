import axios from "axios";

const base_url = "https://www.thecocktaildb.com/api/json/v1/1/";

const getRandomDrink = async() => {
  let result = await axios.get(`${base_url}random.php`);
  return result.data.drinks;
};

export { getRandomDrink };
