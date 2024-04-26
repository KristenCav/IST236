import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Modal,
  TextInput,
  Image,
} from "react-native";
import Colors from "../constants/colors";

function ItemInputModal(props) {
  const [enteredItemText, setEnteredItemText] = useState("");

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler(){
    //Passes to onAddItem function on App.js
    props.onAddItem(enteredItemText);
    //After user adds item, reset to empty field
    setEnteredItemText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/ShoppingCart.png")}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Enter Item Here"
            onChangeText={itemInputHandler}
            value={enteredItemText}
          />

          <View style={styles.modalButtonContainer}>
            <View style={styles.modalButton}>
              <Button
                title="Add Item"
                color="#74a892"
                onPress={addItemHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                color="#c7522a"
                //Passes to onCancel function
                onPress={props.onCancel}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default ItemInputModal;

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: Colors.primary300,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 40,
    },
    inputContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      backgroundColor: Colors.primary300,
      width: "90%",
    },
    image: {
      width: 100,
      height: 100,
      margin: 20,
    },
    textInput: {
      borderWidth: 2,
      borderColor: Colors.accent500,
      backgroundColor: Colors.accent200,
      color: Colors.accent800,
      borderRadius: 6,
      width: "75%",
      padding: 12,
      fontSize: 30,
      fontFamily: "sunny"
    },
    modalButtonContainer: {
      flexDirection: "row",
      marginTop: 15,
    },
    modalButton: {
      width: "30%",
      marginHorizontal: 8,
    },
  });