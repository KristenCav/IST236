import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

function OrderReviewScreen(props) {
  //Set safe area screen boundaries
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
    colors={[Colors.primary300, Colors.accent500, Colors.primary300, Colors.accent500, Colors.primary300]}
    style={styles.rootContainer}
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
      <View>
        <Title>ORDER SUMMARY</Title>
      </View>
      <View stylle={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          Your order has been placed with your order details below
        </Text>
      </View>

      <View style={styles.servicesContainer}>
        <Text style={styles.service}>REPAIR TIME:</Text>
        <Text style={styles.subService}>{props.repair}</Text>

        <Text style={styles.service}>SERVICES:</Text>
        {props.services.map((item) => {
            if (item.value) {
                return (
                    <Text key={item.id} style={styles.subService}>{item.name}</Text>
                );
            }
        })}

        <Text style={styles.service}>SIGNUPS:</Text>
        <Text style={styles.subService}>{props.newsletter ? "Newsletter" : ""}</Text>
        <Text style={styles.subService}>{props.rentalMembership ? "Rental Membership" : ""}</Text>
      </View>

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>
        <Text style={styles.subTitle}>
          Sales Tax: ${(props.price * 0.06).toFixed(2)}
        </Text>
        <Text style={styles.subTitle}>
          Total: ${(props.price + props.price * 0.06).toFixed(2)}
        </Text>
      </View>

      <View style={styles.buttonConatiner}>
        <NavButton onPress={props.onNext}>Return Home</NavButton>
      </View>
    </View>
    </LinearGradient>
    
  );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    marginHorizontal: 5,
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "roboto",
  },
  servicesContainer: {
    flex: 3,
  },
  service: {
    fontSize: 20,
    color: Colors.primary800,
    paddingTop: 15,
  },
  subService: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "roboto",
    color: Colors.primary500,
  },
  buttonConatiner: {
    alignItems: "center",
    marginBottom: 20,
  },
});
