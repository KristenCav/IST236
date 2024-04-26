import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarkScreen from "./screens/BookmarkScreen";
import BreakfastRecipesScreen from "./screens/BreakfastRecipesScreen";
import LunchRecipesScreen from "./screens/LunchRecipesScreen";
import DinnerRecipesScreen from "./screens/DinnerRecipesScreen";
import RecipesDetailScreen from "./screens/RecipesDetailScreen";
import ShoppingListScreen from "./screens/ShoppingListScreen";
import Colors from "./constants/colors";
import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5
} from "@expo/vector-icons";
import { useCallback } from "react";
import BookmarksContextProvider from "./store/context/bookmarks-context";

//Create the three navs
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

//Create DrawerNavigation function for the DrawerScreen component
//Have to include options for a drawer navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Recipes"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "super",
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
        name="Recipes"
        component={TabsNavigator}
        options={{
          title: "All Recipes",
          drawerLabel: "Recipes",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="list-ul" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="BookmarkedRecipes"
        component={BookmarkScreen}
        options={{
          title: "Saved Recipes",
          drawerLabel: "Saved Recipes",
          drawerIcon: ({ color, size }) => (
            <Entypo name="star" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="ShoppingList"
        component={ShoppingListScreen}
        options={{
          title: "Shopping List",
          drawerLabel: "Shopping List",
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-cart" size={size} color={color} />
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
          fontFamily: "super",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="BreakfastRecipes"
        component={BreakfastRecipesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="free-breakfast" size={size} color={color} />
          ),
          tabBarLabel: "BREAKFAST",
        }}
      />

      <Tabs.Screen
        name="LunchRecipes"
        component={LunchRecipesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="lunch-dining" size={size} color={color} />
          ),
          tabBarLabel: "LUNCH",
        }}
      />

      <Tabs.Screen
        name="DinnerRecipes"
        component={DinnerRecipesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="food-turkey"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "DINNER",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    sunny: require("./assets/fonts/SunnySpellsBasicRegular-Yz1Wv.ttf"),
    super: require("./assets/fonts/SuperFuntime-3zpLX.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      //All styling below is for entire stack
      <>
        <StatusBar style="light" />
        <BookmarksContextProvider>
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
                name="RecipesDetail"
                component={RecipesDetailScreen}
                options={{
                  headerBackTitleVisible: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarksContextProvider>
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
