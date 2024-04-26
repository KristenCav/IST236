import List from "../components/List/List";
import { RECIPES } from "../data/dummy_data";
import { useWindowDimensions } from "react-native";

//Get type from data from Recipes and filter only dinner type.
//Return list of items
function  DinnerRecipesScreen() {

  const { width, height } = useWindowDimensions();
  
  const type = "Dinner";
  const displayedListings = RECIPES.filter((recipesItem) => {
    return recipesItem.type === type;
  });

  return <List items={displayedListings} />;
}

export default DinnerRecipesScreen;
