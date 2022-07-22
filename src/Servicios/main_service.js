import axios from "axios";

const base_url = "www.thecocktaildb.com/api/json/v1/1/";

const getRandomDrink = async (state) => {
  let result = await axios.get(`${base_url}random.php`);
  state(result.data);
};

export { getRandomDrink };
