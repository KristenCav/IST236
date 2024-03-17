import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";


function ImageViewModal(props) {
  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <Text style={styles.description}>{props.description}</Text>
          <Button title="Return to Destinations" onPress={props.onClose} />
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c5a5f",
  },
  image: {
    flex: 2,
    paddingTop: 15,
    width: "100%",
    height: "50%",
    //resizeMode: "contain"
  },
  description: {
    flex: 2,
    alignItems: "center",
    width: "90%",
    paddingTop: 20,
    textAlign: "center",
    fontSize: 18,
    color: Colors.primary300
  }
});
