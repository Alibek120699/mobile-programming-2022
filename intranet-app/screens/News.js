import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./Login";

const Stack = createNativeStackNavigator();

function NewsList() {
  console.log("asdf");
  return (
    <>
      News <Button>news</Button>
    </>
  );
}

export function NewsScreen({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="NewsList" component={NewsList} />
    </Stack.Navigator>
  );
}
