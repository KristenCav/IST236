import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TextInput,
  Image,
} from "react-native";

function ItemInputModal(props) {
  const [enteredItemText, setEnteredItemText] = useState("");

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    props.onAddItem(enteredItemText);
    setEnteredItemText("");
  }

  return(
    <Modal visible={props.modalIsVisible} animationType="slide">
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
                    color="#b180f0"
                    onPress={addItemHandler}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Cancel"
                    color="#f1449b"
                    onPress={endAddItemHandler}
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
  );
}