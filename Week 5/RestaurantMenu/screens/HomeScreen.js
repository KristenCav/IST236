import { View, StyleSheet, Text, Image, resizeMode, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props) {
  //Set the SafeAreaScreen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Tupelo Honey Cafe</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image 
        style={styles.image} 
        source={require("../assets/images/tupelohoney.jpg")} />
      </View>

      <View style={styles.infoContainer} >
        <Text 
        style={styles.infoText}
        onPress={() => Linking.openURL("tel:8433153780")}
        >843-315-3780
        </Text>

        <Text 
        style={styles.infoText}
        onPress={() => Linking.openURL("https://maps.app.goo.gl/RHid34EG3WEXQ7Zr8")}
        >3042 Howard Ave{"\n"}Myrtle Beach, SC 29577
        </Text>

        <Text 
        style={styles.infoTextWeb}
        onPress={() => Linking.openURL("https://tupelohoneycafe.com/restaurant/myrtle-beach/")}
        >www.tupelohoneycafe.com
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>VIEW MENU</NavButton>
      </View>

    </View>
  );
}

//
export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center"
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  imageContainer: {
    flex: 4
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center"
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 8,
    color: Colors.primary500,
    fontFamily: "coffeehealing"
  },
  infoTextWeb: {
    fontSize: 30,
    textAlign: "center",
    padding: 8,
    color: Colors.button500,
    fontFamily: "coffeehealing"
  },
  buttonContainer: {
    flex: 1
  }

});
