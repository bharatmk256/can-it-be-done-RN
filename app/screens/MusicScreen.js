//Resso clone app

import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

function MusicScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/anime.jpg")}
    >
      <View style={styles.main}>
        <View style={styles.title}>
          <AntDesign name="menuunfold" color="white" size={30} />
          <Text style={{ color: "white", fontWeight: "600" }}>
            Your Daily Mix
          </Text>
          <Feather name="more-horizontal" color="white" size={30} />
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.lyrics}>
            My last made me feel like i would never try again
          </Text>
          <Text style={styles.lyrics2}>
            But when i saw you i felt something i never felt
          </Text>
        </View>
        <View style={styles.aboutSong}>
          <Text style={styles.songTitle}>Falling</Text>
          <Text style={styles.subtitle}>Trevor Daniel</Text>
        </View>
        <View style={styles.vibes}>
          <Text style={{ color: "white" }}>Vibe 1/5</Text>
          <AntDesign
            name="caretup"
            color="white"
            size={10}
            style={{ marginLeft: 5 }}
          />
        </View>
        <View style={styles.actions}>
          {/* icons */}
          <View style={styles.icons}>
            <FontAwesome name="heart" color="white" size={25} />
            <Ionicons
              name="chatbubble-ellipses"
              color="white"
              size={25}
              style={{ marginHorizontal: 40 }}
            />
            <FontAwesome
              name="share"
              color="white"
              size={25}
              style={{ marginStart: 5 }}
            />
          </View>
          <View style={styles.iconsRight}>
            <Feather
              name="download"
              color="white"
              size={25}
              style={{ marginStart: 5 }}
            />
            <FontAwesome
              name="music"
              color="white"
              size={25}
              style={{ marginStart: 20 }}
            />
          </View>
        </View>
        <View>
          <Slider
            style={styles.slider}
            thumbTintColor="#FFFFFF"
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#F9F9F9"
          />
        </View>
        <View style={styles.bottom}>
          <AntDesign name="pause" color="white" size={30} />
          <AntDesign name="search1" color="white" size={25} />
          <Ionicons name="person-circle-outline" color="white" size={25} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  lyrics: {
    color: "white",
    marginHorizontal: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  lyrics2: {
    color: "white",
    marginStart: 10,
    marginRight: 120,
    fontSize: 25,
  },
  aboutSong: {
    position: "absolute",
    alignItems: "flex-start",
    marginHorizontal: 20,
    bottom: 120,
  },
  songTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
  },
  vibes: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 140,
    right: 40,
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 80,
    marginHorizontal: 20,
  },
  icons: {
    flexDirection: "row",
  },
  iconsRight: {
    position: "absolute",
    flexDirection: "row",
    start: 260,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    top: 425,
    justifyContent: "space-between",
  },
  slider: {
    top: 410,
  },
  background: {
    flex: 1,
  },
});

export default MusicScreen;
