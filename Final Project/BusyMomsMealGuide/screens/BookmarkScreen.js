import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { RECIPES } from "../data/dummy_data";
import List from "../components/List/List";
import Colors from "../constants/colors";
import { useWindowDimensions } from "react-native";


function BookmarksScreen (){

    const { width, height } = useWindowDimensions();
    
      const recipeDetailsFlex = {
        fontSize: width * 0.07,
      };


    const bookmarkedRecipesCtx = useContext(BookmarksContext);
    //For every item in recipes, we are going to filter to see if the ID is in the 
    //bookmark recipes. If it is we are going to keep it, else we drop it.
    const bookmarkedRecipes = RECIPES.filter((recipesId) => {
        return bookmarkedRecipesCtx.ids.includes(recipesId.id);
    });

    if (bookmarkedRecipes.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={[styles.text, recipeDetailsFlex]}>You have no saved recipes yet!</Text>
        </View>
    } else {
        return <List items={bookmarkedRecipes} />;
    }
}

export default BookmarksScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary300,
    },
    text: {
        fontSize: 35,
        fontFamily: "sunny",
        textAlign: "center",
        color: Colors.accent500,
        opacity: 0.6,
    },
});