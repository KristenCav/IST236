import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarkScreen from "./screens/BookmarkScreen";
import MusicNewsScreen from "./screens/MusicNewsScreen";
import USNewsScreen from "./screens/USNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import Colors from "./constants/colors";
import { Entypo, FontAwesome, Fontisto, FontAwesome5 } from "@expo/vector-icons";
import { useCallback } from "react";

//Create the three navs
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

//Create DrawerNavigation function for the DrawerScreen component
//Have to include options for a drawer navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Articles"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "Holliwing",
          fontSize: 40,
          color: Colors.accent800,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="Articles"
        component={TabsNavigator}
        options={{
          title: "All Articles",
          drawerLabel: "News Articles",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="BookmarkedArticles"
        component={BookmarkScreen}
        options={{
          title: "Saved Articles",
          drawerLabel: "Saved Articles",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

//Create TabsNavigator function
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarInactiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "South"
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="USArticles"
        component={USNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="flag-usa" size={size} color={color} />
          ),
          tabBarLabel: "USA",
        }}
      />

      <Tabs.Screen
        name="WorldArticles"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="world-o" size={size} color={color} />
          ),
          tabBarLabel: "WORLD",
        }}
      />

      <Tabs.Screen
        name="MusicArticles"
        component={MusicNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="music" size={size} color={color} />
          ),
          tabBarLabel: "MUSIC",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    South: require("./assets/fonts/Southampton-MRqp.ttf"),
    Holliwing: require("./assets/fonts/Holliwing-ywrrd.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  })

  if (!fontsLoaded && !fontError){
    return null
  } else {
    return (
      //All styling below is for entire stack
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: Colors.primary300,
              headerStyle: { backgroundColor: Colors.primary500 },
              contentStyle: { backgroundColor: "black" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
  
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetailScreen}
              options={{
                headerBackTitleVisible: false,
              }}
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
