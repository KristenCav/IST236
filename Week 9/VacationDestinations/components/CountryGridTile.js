import { LinearGradient } from "expo-linear-gradient";
import { Platform, Pressable, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

function CountryGridTile(props) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        //If pressed is true, return buttonPressed and button style
        //or if not, just return button style
        style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={props.onPress}
      >
        <LinearGradient
            colors={[props.color, props.color, props.color, props.color, Colors.accent300o75]}
            style={styles.innerContainer}
        >
            <Text style={styles.name}>{props.name}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

export default CountryGridTile;


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
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible", //Hides android ripple overflow on android only
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonPressed: {
        
    },
    name: {
        textAlign: "center",
        fontSize: 40,
        fontFamily: "aurely",
    },
});