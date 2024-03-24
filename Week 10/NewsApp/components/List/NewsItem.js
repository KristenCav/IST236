import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function NewsItem(props) {
  const navigation = useNavigation();

    function selectedNewsHandler() {
      navigation.navigate("NewsDetail", {
        newsId: props.id,
      });
    }
    //Build the news tile
  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedNewsHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.agency}>
            Agency: {props.agency}
          </Text>
        <Text style={styles.date}> Date: {props.date}</Text>
          <Text style={styles.author}>
          Author: {props.author} 
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NewsItem;

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
  headline: {
    fontSize: 34,
    fontFamily: "Holliwing",
    paddingBottom: 5
  },
  agency: {
    fontSize: 28,
    fontFamily: "Holliwing"
  },
  date: {
    textAlign: "center",
    width: "100%",
    fontSize: 26,
    fontFamily: "Holliwing"
  },
  author: {
    textAlign: "center",
    width: "100%",
    fontSize: 26,
    fontFamily: "Holliwing",
    paddingBottom: 5
  }
});
