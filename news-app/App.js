import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Detail";
import CategoriesScreen from "./screens/Categories";
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Article Detail" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer initialRouteName="News">
      <Tab.Navigator>
        <Tab.Screen
          options={{ headerShown: false }}
          name="News"
          component={StackNavigator}
        />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
