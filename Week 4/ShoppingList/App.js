import { StatusBar } from "expo-status-bar";
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
  Pressable,
  FlatList,
} from "react-native";
import Item from "./components/Item";

export default function App() {
  // Create State Management Variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [currentID, setCurrentID] = useState(0);

  //Create Modal Screen Handler Functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function addItemHandler(enteredItemText) {
    setShoppingItems((currentShoppingItems) => {
      return [
        //... flattens the list so that you can pull just one items value from  the list
        ...currentShoppingItems,
        { text: enteredItemText, id: currentID },
      ];
    });
    setCurrentID(currentID + 1);
    endAddItemHandler();
  }

  return (
    <>
      {/* Set status bar styling */}
      <StatusBar style="light" />

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
          <FlatList
            //This is the data we want to go over
            data={shoppingItems}
            //This is how I get the unique identifier to tell one item from another
            keyExtractor={(item, index) => {
              return item.id;
            }}
            //Pass in itemData
            renderItem={(itemData) => {
              return <Item text={itemData.item.text} id={itemData.item.id} />; //TODO Add onDeleteItem prop
            }}
          />
        </View>

        <ItemInputModal onAddItem={addItemHandler} onCancel={endAddItemHandler} visible={modalIsVisible} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 40,
    color: "#5e08cc",
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
    borderTopLeftRadius: 20,
  },
  subtitle: {
    fontSize: 30,
    color: "#5e08cc",
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
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
    margin: 20,
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
