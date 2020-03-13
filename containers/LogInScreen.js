import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { useState } from "react";
import axios from "axios";

function LogInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
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
    <ScrollView style={{ flex: 1 }}>
      <TextInput
        autoCapitalize="none"
        placeholder="email"
        placeholderTextColor="#E1E1E1"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Password"
        placeholderTextColor="#E1E1E1"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity onPress={handleSubmit}>
        <Text>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text>Pas de compte ? S'inscrire !</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default LogInScreen;
