import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { NEWS } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";

//Display screen of articles
function NewsDetailScreen(props) {
  const bookmarkedNewsCtx = useContext(BookmarksContext);

  const newsId = props.route.params.newsId;
  const selectedNews = NEWS.find((news) => news.id === newsId);

  const newsIsBookmarked = bookmarkedNewsCtx.ids.includes(newsId);

  function changeBookmarkStatusHandler(){
    if (newsIsBookmarked) {
      bookmarkedNewsCtx.removeFavorite(newsId);
    } else {
      bookmarkedNewsCtx.addFavorite(newsId);
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={newsIsBookmarked}
            onPress={changeBookmarkStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeBookmarkStatusHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.agency}>{selectedNews.headline}</Text>
        <Text style={styles.agency}>Agency: {selectedNews.agency}</Text>
        <Text style={styles.date}>Date: {selectedNews.date}</Text>
        <Text style={styles.author}>Author: {selectedNews.author}</Text>
        <Text style={styles.description}>{selectedNews.description}</Text>
      </View>
    </View>
  );
}
export default NewsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
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
  headline: {
    color: Colors.primary300,
    fontFamily: "Holliwing",
    fontSize: 28,
    paddingBottom: 5,
    fontWeight: "bold",
  },
  agency: {
    color: Colors.primary300,
    fontSize: 28,
    fontFamily: "Holliwing",
  },
  date: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 26,
    fontFamily: "Holliwing",
  },
  author: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 26,
    fontFamily: "Holliwing",
    paddingBottom: 5,
  },
  description: {
    color: Colors.primary300,
    width: "90%",
    textAlign: "justify",
    fontSize: 24,
    fontFamily: "Holliwing",
  },
});
