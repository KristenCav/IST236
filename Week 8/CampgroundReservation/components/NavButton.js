import { Text, View, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

function NavButton(props){
    const {width, height } = useWindowDimensions();

  return(
    <Pressable 
    android_ripple={{ color: Colors.primary500 }}
    onPress={props.onPress}
    style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {fontSize: width * 0.07}]}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width: 1000,
    //Tells the button to only go 70% of 1000
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    padding: 8,
    textAlign: "center",
    color: Colors.primary300,
    fontFamily: "camp",
  },
});
