import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Ecran -> créer un compte
// création d'une fonction SignUpScreen
function SignUpScreen({ setToken, setId }) {
  // permet de naviguer entre plusieurs écrans
  const navigation = useNavigation();

  // création d'état pour le formulaire de création de compte
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // fonction de recherche de données de formulaire depuis la route Signup dans le backend
  const handleSubmit = async () => {
    try {
      // si le mot de passe est différent de la confirmation du mot de passe
      if (password !== confirmPassword) {
        // alors afficher une alerte
        alert("Les mots de passe ne sont pas identiques");
      }
      // lancement de la récupération de données depuis le backend avec une requête axios en post
      const response = await axios.post(
        "https://my-project-yuka.herokuapp.com/user/sign-up",
        // transmission de 4 paramètres
        { email, name, username, password }
      );
      // si on récupère le token dans la réponse axios
      if (response.data.token) {
        // alors on met à jour l'état "setToken" avec la réponse
        setToken(response.data.token);
        // et on met à jour l'état "id" avec la réponse
        setId(response.data.id);
      }
      // s'il y a une erreur alors afficher un message
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <KeyboardAwareScrollView
      extraScrollHeight={110}
      contentContainerStyle={styles.container}
    >
      <SafeAreaView>
        <Image
          source={require("../assets/img/yuka-logo.png")}
          style={styles.logo}
        />
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Votre Email"
            placeholderTextColor="#302C2E"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Votre nom d'utilisateur"
            placeholderTextColor="#302C2E"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Votre nom"
            placeholderTextColor="#302C2E"
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Votre mot de passe"
            placeholderTextColor="#302C2E"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Confirmez votre mot de passe"
            placeholderTextColor="#302C2E"
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
          />

          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.buttonInscription}
          >
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LogIn");
            }}
          >
            <Text style={styles.buttonConnect}>
              Déjà un compte ? Se connecter !
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: 15,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderBottomColor: "#168750",
    borderBottomWidth: 1,
    width: 210,
    height: 45,
    marginBottom: 20,
  },
  buttonInscription: {
    height: 44,
    width: 210,
    justifyContent: "center",
    backgroundColor: "#F59A30",
    borderRadius: 15,
    marginTop: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  buttonConnect: {
    marginTop: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SignUpScreen;
