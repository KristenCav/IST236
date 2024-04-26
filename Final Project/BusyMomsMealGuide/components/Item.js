import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../constants/colors";

function Item(props) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: Colors.accent200 }}
        style={({ pressed }) => pressed && StyleSheet.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  item: {
    margin: 10,
    borderRadius: 6,
    backgroundColor: Colors.accent500,
    width: 475,
    padding: 5
  },
  pressedItem: {
    opacity: 0.5,
  },
  itemText: {
    color: Colors.accent800,
    padding: 8,
    fontFamily: "sunny",
    fontSize: 40,
  },
});
