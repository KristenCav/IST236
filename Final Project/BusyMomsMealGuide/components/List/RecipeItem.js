import { View, Text, StyleSheet, Pressable, Image, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

function RecipesItem(props) {

  const { width, height } = useWindowDimensions();

  const recipeNameFlex = {
    fontSize: width * 0.07,
    textAlign: "center"
  };

  const recipeDetailsFlex = {
    fontSize: width * 0.06,
  };

  const ingredientsTextFlex = {
    fontSize: width * 0.05,
  };

  const navigation = useNavigation();

    function selectedRecipesHandler() {
      navigation.navigate("RecipesDetail", {
        recipesId: props.id,
      });
    }
    //Build the recipes tile
  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedRecipesHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.name, recipeNameFlex]}>{props.name}</Text>
          <Text style={[styles.time, recipeDetailsFlex]}>
            Cook Time: {props.time}  |  Servings: {props.servings}
          </Text>
        <Text style={[styles.ingredients, ingredientsTextFlex]}>{props.ingredients}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default RecipesItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 300
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center"
  },
  name: {
    fontSize: 34,
    fontFamily: "super",
    paddingBottom: 5,
    paddingTop: 10,
  },
  time: {
    fontSize: 24,
    fontFamily: "sunny"
  },
  ingredients: {
    textAlign: "center",
    width: "100%",
    fontSize: 22,
    fontFamily: "sunny",
    paddingBottom: 10,
  },
});
