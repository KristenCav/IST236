import { useLayoutEffect, useState } from "react";
import { SONGS } from "../data/dummy-data";
import FavoriteButton from "../components/FavoriteButton";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../constants/colors";
import LineSeperator from "../components/LineSeperator";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { Audio } from "expo-av";
import { useEffect } from "react";

function SongDetailScreen(props) {
  const favoriteSongIds = useSelector((state) => state.favoriteSongs.ids);
  const dispatch = useDispatch();

  const songId = props.route.params.songId;
  const selectedSong = SONGS.find((song) => song.id === songId);

  const songIsFavorite = favoriteSongIds.includes(songId);

  function changeFavoriteStatusHandler() {
    if (songIsFavorite) {
      dispatch(removeFavorite({ id: songId }));
    } else {
      dispatch(addFavorite({ id: songId }));
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <FavoriteButton
            pressed={songIsFavorite}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeFavoriteStatusHandler]);

  const [sound, setSound] = useState();

  async function playLocalSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(selectedSong.internal);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ImageBackground
      source={require("../assets/images/music_back.jpeg")}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedSong.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{selectedSong.title}</Text>
          <Text style={styles.artist}>{selectedSong.artist}</Text>
          <View style={styles.rowContainer}>
            <Text numberOfLines={1} style={styles.album}>
              Album: {selectedSong.album}
            </Text>
            <Text numberOfLines={1} style={styles.year}>
              Year: {selectedSong.releaseYear}
            </Text>
          </View>
          <Text numberOfLines={1} style={styles.producer}>
            Produced By: {selectedSong.producer}
          </Text>
          <Text numberOfLines={1} style={styles.label}>
            Label: {selectedSong.label}
          </Text>

          <LineSeperator />

          <View style={styles.rowContainer}>
            <Pressable onPress={() => Linking.openURL(selectedSong.youtubeUrl)}>
              <Entypo name="youtube" size={60} color={Colors.accent200} />
            </Pressable>
            <Pressable onPress={() => Linking.openURL(selectedSong.spotifyUrl)}>
              <Entypo name="spotify" size={60} color={Colors.accent200} />
            </Pressable>
            <Pressable onPress={playLocalSound}>
              <Entypo name="folder-music" size={60} color={Colors.accent200} />
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default SongDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backgroundImage: {
    opacity: 0.1,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    alignItems: "center",
  },
  rowContainer: {
    paddingTop: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    paddingTop: 10,
    width: "100%",
    textAlign: "center",
    fontSize: 40,
    fontFamily: "jazzBold",
    color: Colors.primary300,
  },
  artist: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "jazzBold",
    color: Colors.accent500,
  },
  album: {
    paddingRight: 5,
    maxWidth: "70%",
    color: Colors.accent800,
    fontSize: 17,
    fontFamily: "house",
  },
  year: {
    color: Colors.accent800,
    fontSize: 17,
    fontFamily: "house",
  },
  producer: {
    width: "100%",
    textAlign: "left",
    color: Colors.accent800,
    fontFamily: "house",
    fontSize: 12,
  },
  label: {
    width: "100%",
    textAlign: "left",
    color: Colors.accent800,
    fontFamily: "house",
    fontSize: 12,
    paddingBottom: 10,
  },
});
