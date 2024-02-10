import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
//Import Movie Component
import MovieItem from "./components/MovieItem";

export default function App() {
  //Stock data
  const [movieItems, setMovieItems] = useState([
    {
      key: "1",
      name: "The Craft",
      image: require("./assets/images/the-craft-movie.jpg"),
      rating: "8.5",
    },
    {
      key: "2",
      name: "Castaway",
      image: require("./assets/images/castaway.jpg"),
      rating: "8.5",
    },
    {
      key: "3",
      name: "Fightclub",
      image: require("./assets/images/fightclub.jpg"),
      rating: "8.7",
    },
    {
      key: "4",
      name: "The Patriot",
      image: require("./assets/images/thepatriot.jpg"),
      rating: "8.9",
    },
    {
      key: "5",
      name: "Finding Nemo",
      image: require("./assets/images/findingnemo.jpg"),
      rating: "9.0",
    },
    {
      key: "6",
      name: "Monster's Inc",
      image: require("./assets/images/monstersinc.jpg"),
      rating: "9.0",
    },
    {
      key: "7",
      name: "Scream",
      image: require("./assets/images/scream.jpg"),
      rating: "9.2",
    },
    {
      key: "8",
      name: "Saving Private Ryan",
      image: require("./assets/images/savingprivateryan.jpg"),
      rating: "9.4",
    },
    {
      key: "9",
      name: "Texas Chainsaw Massacre",
      image: require("./assets/images/TCM.jpg"),
      rating: "9.6",
    },
    {
      key: "10",
      name: "The Green Mile",
      image: require("./assets/images/thegreenmile.jpg"),
      rating: "10",
    },
  ]);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootcontainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Kristen's Top 10 Movies</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={movieItems}
            renderItem={({ item }) => (
              <MovieItem 
                name={item.name}
                image={item.image}
                rating={item.rating}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    backgroundColor: "#db6868",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 3.5,
    borderRadius: 20,
    borderColor: "#f7eeef",
    backgroundColor: "#dba1a1",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "90%",
  },
});
