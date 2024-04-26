import { Ionicons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from "../constants/colors";

function BookmarkButton(props) {
  if (props.pressed) {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="star" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="star-outline" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}

export default BookmarkButton;
