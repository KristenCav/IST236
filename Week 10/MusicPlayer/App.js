import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GenresScreen from "./screens/GenresScreen";
import SongsOverviewScreen from "./screens/SongsOverviewScreen";
import Colors from "./constants/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";
import FavoritesScreen from "./screens/FavoritesScreen";
import SongDetailScreen from "./screens/SongDetailScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return  (
    <Drawer.Navigator
      initialRouteName="SongGenres"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "house",
          fontSize: 40,
          color: Colors.accent800,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary800 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="SongGenres"
        component={GenresScreen}
        option={{
          title: "Genres",
          drawerLabel: "Music Genres",
          drawerIcon: ({color, size}) => {
            <Entypo name="list" color={color} size={size} />
          },
        }}
      />
      <Drawer.Screen
        name="FavoriteSongs"
        component={FavoritesScreen}
        option={{
          title: "Favorites",
          drawerLabel: "My Favorites",
          drawerIcon: ({color, size}) => {
            <Entypo name="star" color={color} size={size} />
          }
        }}
      />
    </Drawer.Navigator>
  )
}

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
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name="SongsOverview"
              component={SongsOverviewScreen}
              options={{
                headerBackTitleVisible: false
              }}
            />
            <Stack.Screen 
              name="SongDetail"
              component={SongDetailScreen}
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
