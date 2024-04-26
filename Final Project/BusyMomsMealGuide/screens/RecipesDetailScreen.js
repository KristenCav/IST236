import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { RECIPES } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";

//Display screen of recipes
function RecipesDetailScreen(props) {
  const { width, height } = useWindowDimensions();

  const recipeNameFlex = {
    fontSize: width * 0.07,
    textAlign: "center"
  };

  const recipeDetailsFlex = {
    fontSize: width * 0.06,
  };

  const directionsTextFlex = {
    fontSize: width * 0.05,
  };

  const bookmarkedRecipesCtx = useContext(BookmarksContext);

  const recipesId = props.route.params.recipesId;
  const selectedRecipes = RECIPES.find((recipes) => recipes.id === recipesId);

  const recipesIsBookmarked = bookmarkedRecipesCtx.ids.includes(recipesId);

  function changeBookmarkStatusHandler() {
    if (recipesIsBookmarked) {
      bookmarkedRecipesCtx.removeFavorite(recipesId);
    } else {
      bookmarkedRecipesCtx.addFavorite(recipesId);
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={recipesIsBookmarked}
            onPress={changeBookmarkStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeBookmarkStatusHandler]);

  return (
    <ImageBackground
      source={require("../assets/images/rainbow_roasted_veggies.png")}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.rootContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: selectedRecipes.imageUrl }}
            />
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.name, recipeNameFlex]}>
              {selectedRecipes.name}
            </Text>
            <Text style={[styles.time, recipeDetailsFlex]}>
              Cook Time: {selectedRecipes.time}
            </Text>
            <Text style={[styles.servings, recipeDetailsFlex]}>
              Servings: {selectedRecipes.servings}
            </Text>
            <ScrollView
              style={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
            >
              <View style={[styles.directions, recipeDetailsFlex]}>
                <Text style={[styles.directions, directionsTextFlex]}>
                  DIRECTIONS: {selectedRecipes.directions}
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
export default RecipesDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  backgroundImage: {
    opacity: 0.2,
  },
  imageContainer: {
    marginVertical: 10,
    maxHeight: 300,
    height: "100%",
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  name: {
    color: Colors.primary300,
    fontSize: 30,
    paddingBottom: 5,
    fontFamily: "super",
  },
  time: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 24,
    fontFamily: "sunny",
  },
  servings: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 24,
    fontFamily: "sunny",
    paddingBottom: 5,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "95%",
    maxHeight: "95%",
    paddingLeft: 10,
  },
  directions: {
    color: Colors.primary300,
    width: "98%",
    textAlign: "justify",
    fontSize: 20,
    fontFamily: "sunny",
    paddingBottom: 10
  },
});
