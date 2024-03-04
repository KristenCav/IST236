import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";

function HomeScreen(props) {
  //Set safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../assets/images/bicycleShop.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
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
          <Title>BICYCLE SHOP</Title>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Repair Times:</Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>

          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}>Services Needed:</Text>
            <View style={styles.checkBoxSubContainer}>
              {props.services.map((item) => {
                return (
                  <BouncyCheckbox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSetServices.bind(this, item.id)}
                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primary500,
                    }}
                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primary500,
                    }}
                    iconStyle={{
                      borderRadius: 0,
                    }}
                    fillColor={Colors.primary500}
                    style={{
                      padding: 2,
                    }}
                  />
                );
              })}
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.addOnsContainer}>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Newsletter Signup</Text>
                <Switch
                  onValueChange={props.onSetNewsletter}
                  value={props.newsletter}
                  thumbColor={
                    props.newsletter ? Colors.primary300 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary300,
                    true: Colors.primary800,
                  }}
                />
              </View>

              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Rental Membership Signup</Text>
                <Switch
                  onValueChange={props.onSetRentalMembership}
                  value={props.rentalMembership}
                  thumbColor={
                    props.rentalMembership
                      ? Colors.primary300
                      : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary300,
                    true: Colors.primary800,
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit Order</NavButton>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.08,
  },
  titleContainer: {
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 5,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary500,
    fontFamily: "roboto",
  },
  radioGroup: {
    paddingBottom: 25,
  },
  radioGroupLabels: {
    fontSize: 15,
    color: Colors.primary500,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {},
  checkBoxHeader: {
    fontSize: 30,
    color: Colors.primary500,
    fontFamily: "roboto",
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  cheeseContainer: {
    alignItems: "center",
  },
  addOnsContainer: {
    justifyContent: "space-between",
    padding: 10,
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 25,
    fontFamily: "roboto",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
