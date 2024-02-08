import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Modal,
  TextInput,
} from "react-native";

export default function App() {
  //Create an array for 8ball responses
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  //Create state management variables
  const [modalIsVisible, setModelIsVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState("");

  const userQuestionText = userQuestion;
  const questionAnswerText = questionAnswer;

  function startQuestionHandler() {
    setModelIsVisible(true);
    setUserQuestion(userQuestionText);
    
    let i = Math.floor(Math.random() * responses.length);
    setQuestionAnswer(responses[i]);
  }

  function endQuestionHandler() {
    setModelIsVisible(false);
  }

  if (userQuestion !== "") {
    resultText = <Text style={styles.resultText}>{userQuestionText}</Text>
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Magic 8Ball</Text>
          </View>
        </View>
        <View style={styles.questionContainer}>
        <TextInput
              style={styles.textInput}
              //Placeholder for when it's empty
              placeholder="Enter your question here"
              //Set the keyboard type to number pad for only integers
              keyboardType="default"
              //When the text is changed, update the userQuestion
              onChangeText={setUserQuestion}
              //Ties the entered value to the userQuestion so when it is reset to blank the input field will also reset
              value={userQuestion}
            />
        </View>

        <View style={styles.askButtonContainer}>
          <Pressable
            // Add the android ripple
            android_ripple={{ color: "#2ddbdb" }}
            // Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            //When pressed, open modal screen
            onPress={startQuestionHandler}
          >
            <View style={styles.askButton}>
              <Text style={styles.askButtonText}>Ask 8Ball</Text>
            </View>
          </Pressable>
          {/* <Button title="Roll Dice" style={styles.rollButton}/> */}
        </View>

        <Modal visible={modalIsVisible}>
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.inputLabel}>{userQuestionText}</Text>
            <Text style={styles.inputLabel}>{questionAnswer}</Text>
            <View style={styles.modalButtonContainer}>
              <View style={styles.modalButton}>
                <Button title="Exit" onPress={endQuestionHandler} />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#538288",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleBackground: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
  },
  questionContainer: {
    width: "80%",
  },
  pressedButton: {
    opacity: 0.8,
  },
  askButtonContainer: {
    flex: 1,
  },
  askButton: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  askButtonText: {
    fontSize: 25,
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "#98c4ca",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 25,
    color: "#000000",
    marginTop: 20,
  },
  textInput: {
    backgroundColor: "#cdf3eb",
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    color: "#000000",
    marginBottom: 30,
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8,
  },
});
