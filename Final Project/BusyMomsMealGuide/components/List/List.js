import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import RecipesItem from "./RecipeItem";

function List(props) {
  function renderRecipesItem(itemData) {
    const recipesItemProps = {
      id: itemData.item.id,
      name: itemData.item.name,
      imageUrl: itemData.item.imageUrl,
      time: itemData.item.time,
      servings: itemData.item.servings,
      ingredients: itemData.item.ingredients,
      directions: itemData.item.directions,
      listIndex: itemData.index,
    };
    return <RecipesItem {...recipesItemProps} />;
  }

  return (
    <ImageBackground
    source={require("../../assets/images/cooking1.png")}
    resizeMode="cover"
    style={styles.container}
    imageStyle={styles.backgroundImage}
  >
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipesItem}
        showsVerticalScrollIndicator={false}
      />
    </View></ImageBackground>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    //backgroundColor: "#fbf2c4"
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
