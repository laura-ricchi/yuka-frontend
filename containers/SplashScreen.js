import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={require("../assets/img/photo-carrot-yuka.png")}
      />
      <Text style={styles.welcome}>Welcome !</Text>
      <Text style={styles.description}>
        Yuka is a 100% independent app that helps you choose the right products!
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20
        }}
      >
        <TouchableHighlight
          style={styles.button}
          onPress={() => console.log("!")}
        >
          <Text style={styles.buttonText}>Let's go !</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#49C17B"
  },
  photo: {
    width: "100%"
  },

  welcome: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 30,
    marginTop: 20,
    textAlign: "center"
  },

  description: {
    color: "#fff",
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "200"
  },
  button: {
    height: 44,
    width: 210,
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 15
  },
  buttonText: {
    color: "#FF790E",
    fontWeight: "bold",
    textAlign: "center"
  }
});
