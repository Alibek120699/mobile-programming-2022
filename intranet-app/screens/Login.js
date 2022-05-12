import { useState } from "react";
import { Button, TextInput } from "react-native";

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("NewsList");
  };

  return (
    <>
      Login Screen
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={{ padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
        style={{ padding: 10 }}
      />
      <Button title="login" onPress={handleLogin} />
    </>
  );
}
