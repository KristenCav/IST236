import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import RecipesScreen from "./screens/RecipesScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  //Side note - starting with 3 because we already have ID 1 and 2 used below
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipes, setCurrentRecipes] = useState([
    //Set a default state for dictionary items - keys for the flatlist
    {
      id: 1,
      title: "Chocolate Chip Cookies",
      text: "Ingredients\n1 cup salted butter softened\n1 cup granulated sugar\n1 cup light brown sugar packed\n2 teaspoons pure vanilla extract\n2 large eggs\n3 cups all-purpose flour\n1 teaspoon baking soda\n½ teaspoon baking powder\n1 teaspoon sea salt\n2 cups chocolate chips\n\n\nDirections\n1. Preheat oven to 375 degrees F. Line three baking sheets with parchment paper and set aside.\n2. In a medium bowl mix flour, baking soda, baking powder and salt. Set aside.\n3. Cream together butter and sugars until combined.\n4. Beat in eggs and vanilla until light.\n5. Mix in the dry ingredients until combined.\n" +
      "6. Add chocolate chips and mix well.\n7. Roll 2-3 Tablespoons of dough at a time into balls and place them evenly spaced on your prepared cookie sheets.\n8. Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just barely starting to turn brown.\n9. Let them sit on the baking pan for 2 minutes before removing to cooling rack.\n",
    },
    {
      id: 2,
      title: "Fried Milk",
      text: "Ingredients\n1 cup coconut milk\n¼ cup milk\n3 tbsp. cornstarch\n3 tbsp. sugar\n2 large eggs, whisked well for coating\n¼ cup cornstarch for coating\n1 cup breadcrumbs or oats\nOil for deep-frying\n\nDirections\n1. In a small bow, add coconut milk, milk, cornstarch and sugar. Heat over slowest fire and until heating until thickened. In the process, stir in one direction. Transfer to a square baking pan and set aside to cool down in fridge (rest for 40 to 60 minutes) until well hardened.\n2. Transfer out and cut into small strips around 5 cm long and 3 cm wide.\n3. Coat with starch, egg and breadcrumbs in sequence.\n4. Heat oil until 150 to 160 degree C. Place 4-5 pieces on a flat strainer, dip the strainer in and fry until slightly golden brown and crispy. Repeat until all of the remaining pieces are fried. Remove extra oil with kitchen paper and serve directly.\n5. Absorb extra oil with kitchen paper and serve hot.",
    },
  ]);

  //Screen handler functions to trasnfer screens
  function homeScreenHandler() {
    //Must match currentScreen state above - starts you on the correct screen
    setCurrentScreen("home");
  }

  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    //Get current recipes first and then add newly entered recipe
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });

    //Auto increment recipe ID
    setCurrentID(currentID + 1);

    //Go to back to recipe screen
    recipesScreenHandler();
  }

  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    })
  }

  let screen = <HomeScreen onNext={recipesScreenHandler} />;

  if (currentScreen === "add") {
    screen = <AddRecipeScreen onAdd={addRecipeHandler} onCancel={recipesScreenHandler} />;
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
