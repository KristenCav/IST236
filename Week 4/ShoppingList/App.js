import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import Item from "./components/Item";
import ItemInputModal from "./modals/ItemInputModal";

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

  //Get entered item text and append to list
  function addItemHandler(enteredItemText) {
    //Current shopping items are sent to
    setShoppingItems((currentShoppingItems) => {
      return [
        //... flattens list and gives back just the items
        ...currentShoppingItems,
        { text: enteredItemText, id: currentID },
      ];
    });
    //Adds one to whatever the currentID is - this is to prevent redundant IDs
    setCurrentID(currentID + 1);
    endAddItemHandler();
  }

  function deleteItemHandler(id) {
    Alert.alert("Delete Item", "Are you sure you want to delete?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Confirm",
        style: "default",
        onPress: () => {
          setShoppingItems((currentShoppingItems) => {
            //Filter is looking for a true/false for each item in the list
            //If item.id is not equal to id, we keep it. If it is, we skip it
            return currentShoppingItems.filter((item) => item.id !== id);
          });
        },
      },
    ]);
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
            data={shoppingItems}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <Item
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteItemHandler}
                />
              );
            }}
          />
        </View>
        <ItemInputModal
          onAddItem={addItemHandler}
          onCancel={endAddItemHandler}
          visible={modalIsVisible}
        />
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
});
