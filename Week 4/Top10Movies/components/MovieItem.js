import { Image, View, Text, StyleSheet } from "react-native";

//Create the layout of each item to render
function MovieItem(props) {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.itemTitle}>{props.name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.itemImage} source={props.image} />
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.itemRating}>{props.rating} / 10</Text>
        </View>
      </View>
    );
  }

//Makes this file available to all other files
export default MovieItem;

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },
    titleContainer: {
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 3
    },
    itemTitle: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        color: "#dba1a1",
        backgroundColor: "#000000",
        padding: 5,
        textTransform: "uppercase"
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 3,
    },
    itemImage: {
        height: 400,
        width: "100%"
    },
    ratingContainer: {
        backgroundColor: "white",
        borderWidth: 4,
        borderRadius: 3
    },
    itemRating: {
        fontSize: 24,
        textAlign: "center",
    },
});