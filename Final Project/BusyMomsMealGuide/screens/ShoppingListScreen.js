import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Alert,
  useWindowDimensions,
} from "react-native";
import Item from "../components/Item";
import ItemInputModal from "../modals/ItemInputModal";
import Colors from "../constants/colors";

function ShoppingListScreen() {
  const { width, height } = useWindowDimensions();

  const titleFlex = {
    fontSize: width * 0.07,
    textAlign: "center",
  };

  const subtitleFlex = {
    fontSize: width * 0.06,
    textAlign: "center"
  };

  const buttonTextFlex = {
    fontSize: width * 0.05,
  };

  const titleContainerHeight = height * 0.8;
  const addButtonHeight = height * 0.2;
  const subtitleContainerHeight = height * 0.2;

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
      {/* Set safeAreaView screen container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set Title Container */}
        <View style={[styles.titleContainer, { height: titleContainerHeight }]}>
          <Text style={[styles.title, titleFlex]}>Items Needed</Text>
        </View>

        {/* Set Add item Button Container */}
        <View style={[styles.buttonContainer, { height: addButtonHeight}]}>
          <Pressable
            //Add the android ripple
            android_ripple={{ color: Colors.accent200 }}
            //Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            //When pressed, open modal screen
            onPress={startAddItemHandler}
          >
            <View style={styles.addButton}>
              <Text style={[styles.addButtonText, buttonTextFlex]}>Add New Item</Text>
            </View>
          </Pressable>
        </View>

        {/* Set items to Get Title container */}
        <View style={[styles.subtitleContainer, { height: subtitleContainerHeight }]}>
          <Text style={[styles.subtitle, subtitleFlex]}>Items To Get:</Text>
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

export default ShoppingListScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: Colors.primary300,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    backgroundColor: Colors.accent500,
    justifyContent: "center",
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    width: "60%"
  },
  title: {
    fontSize: 30,
    color: Colors.accent800,
    fontFamily: "super",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    width: "30%",
  },
  addButton: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 3,
    borderRadius: 2,
    borderColor: Colors.accent500,
  },
  addButtonText: {
    fontSize: 30,
    color: Colors.accent500,
    fontFamily: "sunny",
    textAlign: "center"
  },
  pressedButton: {
    opacity: 0.8,
  },
  subtitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    backgroundColor: Colors.primary500,
    justifyContent: "center",
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    width: "60%",
  },
  subtitle: {
    fontSize: 30,
    color: Colors.accent800,
    justifyContent: "center",
    fontFamily: "super",
  },
  listContainer: {
    flex: 4,
    width: "70%",
    alignItems: "center",
  },
  listText: {
    fontSize: 20,
    color: "black",
  },
});
