import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function LogInScreen({ setToken, setId }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSubmitConnect = async () => {
    try {
      if (email === "") {
        alert("Merci de saisir votre email ");
      } else if (password === "") {
        alert("Merci de saisir votre mot de passe");
      }
      const response = await axios.post(
        "https://my-project-yuka.herokuapp.com/user/log-in",
        { email, password }
      );
      if (response.data.token) {
        setToken(response.data.token);
        setId(response.data.id);
      }
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
            autoCapitalize="none"
            placeholder="Votre mot de passe"
            placeholderTextColor="#302C2E"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity
            onPress={handleSubmitConnect}
            style={styles.buttonConnect}
          >
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.buttonInscription}>
              Pas de compte ? S'inscrire !
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
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
    marginBottom: 30,
  },
  buttonConnect: {
    height: 44,
    width: 210,
    justifyContent: "center",
    backgroundColor: "#F59A30",
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  buttonInscription: {
    marginTop: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LogInScreen;
