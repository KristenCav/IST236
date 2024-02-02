import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Modal, TextInput, Image, Pressable } from 'react-native';

export default function App() {
  // Create State Management Variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState("");
  const [enteredItemText, setEnteredItemText] = useState("");

  //Create Modal Screen Handler Functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    console.log(enteredItemText);
    if (shoppingItems === "") {
      setShoppingItems(enteredItemText);
    } else {
      setShoppingItems(shoppingItems + "\n" + enteredItemText);
    }
    setEnteredItemText("");
    endAddItemHandler();
  }

  return (
    <>
      {/* Set status bar styling */}
      <StatusBar style='light' />

      {/* Set safeAreaView screen container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set Title Container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        {/* Set Add item Button Container */}
        <View style={styles.buttonContainer}>
            <Pressable
              //Add the android ripple
              android_ripple={{ color: "#b180f0" }}
              //Style the button when pressed
              style={({ pressed }) => pressed && styles.pressedButton}
              //When pressed, open modal screen
              onPress={startAddItemHandler}
            >
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>Add New Item</Text>
              </View>
            </Pressable>
          </View>

        {/* Set items to Get Title container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Items To Get:</Text>
        </View>

        {/* Set List of Items Container */}
        <View style={styles.listContainer}>
          <Text style={styles.listText}>{shoppingItems}</Text>
        </View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.appContainer}>
            <View style={styles.inputContainer}>
              <Image
                style={styles.image}
                source={require("./assets/images/ShoppingCart.png")}
              />

              <TextInput
                style={styles.textInput}
                placeholder="Enter Item Here"
                onChangeText={itemInputHandler}
                value={enteredItemText}
              />

              <View style={styles.modalButtonContainer}>
                <View style={styles.modalButton}>
                  <Button title="Add Item" color="#b180f0" onPress={addItemHandler} />
                </View>
                <View style={styles.button}>
                  <Button title="Cancel" color="#f1449b" onPress={endAddItemHandler} />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1e085a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20
  },
  title: {
    fontSize: 40,
    color: "#5e08cc"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5e08cc",
  },
  pressedButton: {
    opacity: 0.8,
  },
  subtitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20
  },
  subtitle: {
    fontSize: 30,
    color: "#5e08cc",
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    backgroundColor: "#ffffff",
    width: "80%",
    alignItems: "center",
  },
  listText: {
    fontSize: 20,
    color: "black",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
    width: "90%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#efd0ff",
    backgroundColor: "#efd0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
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
