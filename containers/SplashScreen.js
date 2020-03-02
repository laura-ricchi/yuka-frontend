import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={require("../assets/img/photo-carrot-yuka.png")}
      />
      <Text style={styles.welcome}>Bienvenue sur Yuka!</Text>
      <Text style={styles.description}>
        Yuka est une appli 100% indépendante qui vous aide à choisir les bons
        produits !
      </Text>
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
  }
});
