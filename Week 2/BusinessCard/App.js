import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("./assets/images/kristencavanagh50.jpg")}/>
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.textName}>Kristen Cavanagh</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("tel:8435040527")}>(843) 504-0527</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("mailto:kcavanag@hgtc.edu")}>kcavanag@hgtc.edu</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/KristenCav")}>Go to Kristen's GitHub</Text>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    flex: 4,
    paddingTop: 50,
    width: "100%"
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },

  informationContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontSize: 24,
    color: "#4d4a4a",
    margin: 4,
  },

  textName: {
    fontSize: 26,
    color: "#934040",
    fontWeight: "bold",
    margin: 5
  },
});
