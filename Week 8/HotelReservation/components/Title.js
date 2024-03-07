import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

function Title(props){
    //Height and width will be used to rerender the return to 
    //use the font size based on the screen size
    const { width, height } = useWindowDimensions();
    return <Text style={[styles.title, {fontSize: width * 0.13}]}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: "hotel",
        color: Colors.primary500,
        textAlign: "center",
    },
});