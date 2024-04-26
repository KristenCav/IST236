class Recipes {
    constructor(
      id,
      type,
      imageUrl,
      name,
      time,
      servings,
      ingredients,
      directions
    ) {
      this.id = id;
      this.type = type;
      this.imageUrl = imageUrl;
      this.name = name;
      this.time = time;
      this.servings = servings;
      this.ingredients = ingredients;
      this.directions = directions;
    }
  
    toString() {
      return `Recipe Category: ${this.type} - Name: ${this.name} - Total Cooking Time: ${this.time} - Servings: ${this.servings} - Ingredients: ${this.ingredients} - Directions: ${this.directions} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default Recipes;
  