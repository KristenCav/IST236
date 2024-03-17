import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DestinationOverviewScreen from "./screens/DestinationOverviewScreen";
import Colors from "./constants/colors";

//Call stack variable - prevents stack from resetting while app is open
const Stack = createNativeStackNavigator();

export default function App() {
  //Create fonts
  const [fontsLoaded, fontError] = useFonts({
    aurely: require("./assets/fonts/Aurely.otf"),
  });

  //Wait for fonts to load
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      //Build a directory of pages
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen" 
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: Colors.primary300,
            headerTitleStyle: {fontFamily: "aurely", fontSize: 40},
            contentStyle: {backgroundColor: Colors.primary800 }
          }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Destination by Country",
              }}
            />
            <Stack.Screen
              name="DestinationOverviewScreen"
              component={DestinationOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
