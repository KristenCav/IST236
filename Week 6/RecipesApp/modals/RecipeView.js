import { Modal, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function RecipeView(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={props.visible} animationType="slide">
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
          <Text style={styles.title}>{props.title}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>

        <View style={styles.navButtonContainer}>
          <NavButton onNext={props.onClose}>Return to Recipes</NavButton>
        </View>
      </View>
    </Modal>
  );
}

export default RecipeView;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.accent800,
        alignItems: "center",
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        //fontFamily: "Arial",
        color: Colors.primary300,
    },
    textContainer: {
        flex: 5,
        width: "90%",
        borderWidth: 3,
        borderColor: Colors.primary500,
        padding: 10,
    },
    text: {
        color: Colors.primary300,
        fontSize: 14,
        //fontFamily: "Helvetica",
    },
    navButtonContainer: {
        marginTop: 10,
        flex: 1,
    },
});