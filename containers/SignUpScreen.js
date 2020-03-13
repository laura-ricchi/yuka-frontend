import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import axios from "axios";

function SignUpScreen({ setToken, setId }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Les mots de passe ne sont pas identiques");
      }
      const response = await axios.post(
        "https://my-project-yuka.herokuapp.com/user/sign-up",
        { email, name, username, password }
      );
      console.log(response.data);

      if (response.data.token) {
        setToken(response.data.token);
        setId(response.data.id);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
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
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Votre nom d'utilisateur"
          placeholderTextColor="#302C2E"
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Votre nom"
          placeholderTextColor="#302C2E"
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Votre mot de passe"
          placeholderTextColor="#302C2E"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Confirmez votre mot de passe"
          placeholderTextColor="#302C2E"
          secureTextEntry={true}
          onChangeText={text => setConfirmPassword(text)}
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
  );
}
const styles = StyleSheet.create({
  logo: {
    marginTop: 15
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  textInput: {
    borderBottomColor: "#168750",
    borderBottomWidth: 1,
    width: 210,
    height: 45,
    marginBottom: 10
  },
  buttonInscription: {
    height: 44,
    width: 210,
    justifyContent: "center",
    backgroundColor: "#F59A30",
    borderRadius: 15,
    marginTop: 15
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  buttonConnect: {
    marginTop: 15,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default SignUpScreen;
