import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GenresScreen from "./screens/GenresScreen";
import SongsOverviewScreen from "./screens/SongsOverview";
import Colors from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  //Import Fonts
  const [fontsLoaded, fontError] = useFonts({
    house: require("./assets/fonts/House Music.ttf"),
    jazz: require("./assets/fonts/Jazz Music-Italic.otf"),
    jazzBold: require("./assets/fonts/Jazz Music-Bold-Italic.otf"),
    jazzInverse: require("./assets/fonts/Jazz Music-Inverse.otf"),
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
        <StatusBar style='light' />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SongGenres'
            screenOptions={{
              headerStyle:{backgroundColor: Colors.primary500},
                headerTintColor: "white",
                headerTitleStyle: {fontFamily: "house", fontSize: 40, color: Colors.accent800},
                contentStyle: {backgroundColor: Colors.primary800 },
            }}>
            <Stack.Screen 
              name="SongGenres"
              component={GenresScreen}
              options={{
                title: "Music Genres"
              }}
            />
            <Stack.Screen 
              name="SongsOverview"
              component={SongsOverviewScreen}
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
