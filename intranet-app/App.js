import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import {
  AttendanceScreen,
  AttestationScreen,
  NewsScreen,
  ScheduleScreen,
} from "./screens";
import "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen
          name="News"
          options={(props) => {
            console.log(props, ">", props.route[Symbol("CHILD_STATE")]);
            return {
              headerShown: false,
              tabBarVisible: props.route.name !== "News",
            };
          }}
          component={NewsScreen}
        />
        <Tab.Screen name="Attestation" component={AttestationScreen} />
        <Tab.Screen name="Attendance" component={AttendanceScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
