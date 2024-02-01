import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    {/* Set status bar styling */}
    <StatusBar style='light' />

    {/* Set safeAreaView screen container */}
    <SafeAreaView style={styles.appContainer}>
      {/* Set Title Container */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shopping List</Text>
      </View>
      
      {/* Set Add item Button Container */}
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Add Item Button Goes Here</Text>
      </View>
      
      {/* Set items to Get Title container */}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Items To Get:</Text>
      </View>
      
      {/* Set List of Items Container */}
      <View style={styles.listContainer}>
        <Text style={styles.text}>List of Items Goes Here</Text>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1e085a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20
  },
  title: {
    fontSize: 40,
    color: "#5e08cc"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  subtitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20
  },
  subtitle: {
    fontSize: 30,
    color: "#5e08cc",
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    backgroundColor: "#ffffff",
    justifyContent: "center"
  },
});
