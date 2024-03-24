import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";

function List(props) {
  function renderNewsItem(itemData) {
    const newsItemProps = {
      id: itemData.item.id,
      agency: itemData.item.agency,
      imageUrl: itemData.item.imageUrl,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      description: itemData.item.description,
      listIndex: itemData.index,
    };
    return <NewsItem {...newsItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
