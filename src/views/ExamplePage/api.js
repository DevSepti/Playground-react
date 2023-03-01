export default class ApiMeal {
  // _api = 'https://www.themealdb.com/api/json/v1/1/random.php';

  // eslint-disable-next-line class-methods-use-this
  getMeal = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const result = await response.json();
    const meals = await result.meals[0];

    if (!result) {
      throw new Error(`Error ${result.status}`);
    }

    return meals;
  };
}
