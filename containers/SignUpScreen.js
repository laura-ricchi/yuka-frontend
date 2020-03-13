import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";

function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    try {
      if (password === confirmPassword) {
        const response = await axios.post(
          "https://my-project-yuka.herokuapp.com/user/sign-up",
          { email, name, username, password }
        );
      } else {
        alert("Les mots de passe ne sont pas identiques");
      }
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
    <ScrollView style={{ flex: 1 }}>
      <TextInput
        autoCapitalize="none"
        placeholder="email"
        placeholderTextColor="#E1E1E1"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Username"
        placeholderTextColor="#E1E1E1"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Name"
        placeholderTextColor="#E1E1E1"
        onChangeText={text => setName(text)}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Password"
        placeholderTextColor="#E1E1E1"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Confirm password"
        placeholderTextColor="#E1E1E1"
        secureTextEntry={true}
        onChangeText={text => setConfirmPassword(text)}
      />

      <TouchableOpacity onPress={handleSubmit}>
        <Text>S'incrire</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LogIn");
        }}
      >
        <Text>Déjà un compte ? Se connecter !</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default SignUpScreen;
