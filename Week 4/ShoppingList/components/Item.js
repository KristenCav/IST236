import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TextInput,
  Image,
  Pressable,
  FlatList,
} from "react-native";

function Item(props) {
  return (
    <View style={styles.item}>
      <Pressable
        //Add the android ripple
        android_ripple={{ color: "#b180f0" }}
        //Style the button when pressed
        style={({ pressed }) => pressed && styles.pressedButton}
        //TODO Add onPress
      >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
    item: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e08cc",
    },
    pressedItem: {
        opacity: 0.5
    },
    itemText: {
        color: "#ffffff",
        padding: 8
    },
});