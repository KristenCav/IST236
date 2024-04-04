import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";

function GenreGridTile(props) {
  return (
    //If button is pressed, add style.buttonPressed.
    //If not, do not add any other styles other than styles.button
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={props.onPress}
      >
        <LinearGradient
          colors={[
            props.color,
            props.color,
            props.color,
            props.color,
            props.color,
            props.color,
            Colors.accent800,
          ]}
          style={styles.innerContainer}
        >
          <Text style={styles.title}>{props.title}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}


export default GenreGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible", //Hides android ripple overflow on android only
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontFamily: "jazzBold",
    },
});