import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import AddNoteScreen from "./screens/AddNoteScreen";
import NotesScreen from "./screens/NotesScreen";
import { useFonts } from "expo-font";

export default function App() {
  //Pull in custom fonts
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("home");
  //Side note - starting with 3 because we already have ID 1 and 2 used below
  const [currentID, setCurrentID] = useState(3);
  const [currentNotes, setCurrentNotes] = useState([
    //Set a default state for dictionary items - keys for the flatlist
    {
      id: 1,
      title: "To Do List",
      text: "1. Do Homework\n2. Clean Car\n3. Pay Bills\n4. Make Dinner",
    },
    {
      id: 2,
      title: "To Do List v2",
      text: "1. Do Homework\n2. Clean Car\n3. Pay Bills\n4. Make Dinner",
    },
  ]);

  //Screen handler functions to trasnfer screens
  function homeScreenHandler() {
    //Must match currentScreen state above - starts you on the correct screen
    setCurrentScreen("home");
  }

  function notesScreenHandler() {
    setCurrentScreen("notes");
  }

  function addNoteScreenHandler() {
    setCurrentScreen("add");
  }

  function addNoteHandler(enteredNoteTitle, enteredNoteText) {
    //Get current notes first and then add newly entered note
    setCurrentNotes((currentNotes) => {
      return [
        ...currentNotes,
        { id: currentID, title: enteredNoteTitle, text: enteredNoteText },
      ];
    });

    //Auto increment note ID
    setCurrentID(currentID + 1);

    //Go to back to note screen
    notesScreenHandler();
  }

  function deleteNoteHandler(id) {
    setCurrentNotes((currentNotes) => {
      return currentNotes.filter((item) => item.id !== id);
    })
  }

  let screen = <HomeScreen onNext={notesScreenHandler} />;

  if (currentScreen === "add") {
    screen = <AddNoteScreen onAdd={addNoteHandler} onCancel={notesScreenHandler} />;
  }

  if (currentScreen === "notes") {
    screen = (
      <NotesScreen
        onHome={homeScreenHandler}
        onAdd={addNoteScreenHandler}
        onDelete={deleteNoteHandler}
        currentNotes={currentNotes}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
