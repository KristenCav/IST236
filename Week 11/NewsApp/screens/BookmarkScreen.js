import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { NEWS } from "../data/dummy_data";
import List from "../components/List/List";
import Colors from "../constants/colors";


function BookmarksScreen (){
    const bookmarkedNewsCtx = useContext(BookmarksContext);
    //For every item in listings, we are going to filter to see if the ID is in the 
    //bookmark listings. If it is we are going to keep it, else we drop it.
    const bookmarkedNews = NEWS.filter((newsId) => {
        return bookmarkedNewsCtx.ids.includes(newsId.id);
    });

    if (bookmarkedNews.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no saved articles yet!</Text>
        </View>
    } else {
        return <List items={bookmarkedNews} />;
    }
}

export default BookmarksScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    text: {
        fontSize: 35,
        fontFamily: "Holliwing",
        textAlign: "center",
        color: Colors.primary500,
        opacity: 0.6,
    },
});