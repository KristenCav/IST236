import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import { useState } from "react";
import { FlatList } from "react-native";
import MenuItems from "../components/MenuItems";

function MenuScreen(props) {
  //Set the SafeAreaScreen Boundaries
  const insets = useSafeAreaInsets();

  const [menuItems, setMenuItems] = useState([
    {
      name: "classic caesar salad",
      image: require("../assets/images/caesar.jpg"),
      price: "$10.99",
      id: 1,
    },
    {
      name: "bistro filet & loaded potatoes",
      image: require("../assets/images/filetpotatoes.jpg"),
      price: "\$35.99",
      id: 2,
    },
    {
      name: "beef barbacoa po'boy",
      image: require("../assets/images/beefbarbacoa.jpg"),
      price: "\$17.99",
      id: 3,
    },
    {
      name: "bourbon peppercorn glazed meatloaf",
      image: require("../assets/images/glazedmeatloaf.jpg"),
      price: "\$17.99",
      id: 4,
    },
    {
      name: "smothered chicken",
      image: require("../assets/images/smotheredchicken.jpg"),
      price: "\$22.99",
      id: 5,
    },
  ]);

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Menu</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <MenuItems
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
              />
            );
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>BACK HOME</NavButton>
      </View>
    </View>
  );
}

//
export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20
  },
});
