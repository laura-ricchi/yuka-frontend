import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

export default function SplashScreen(setToken, setId) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={require("../assets/img/photo-carrot-yuka.png")}
      />
      <Text style={styles.welcome}>Bienvenue !</Text>
      <Text style={styles.description}>
        Yuka est une application 100% indépendante qui vous aide à choisir les
        bons produits!
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
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={styles.buttonText}>C'est parti !</Text>
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
    textAlign: "center",
    fontSize: 20
  }
});
