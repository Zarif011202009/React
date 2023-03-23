import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import ListScreen from "./src/Screens/ListScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import ForgotPasswordScreen from "./src/Screens/ForgotPasswordScreen";
import AboutUsScreen from "./src/Screens/AboutUsScreen";
import CrimeReportScreen from "./src/Screens/CrimeReportScreen";
import Camera from "./src/Screens/Camera";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="List" component={ListScreen} />
        <stack.Screen name="Sign" component={SignupScreen} />
        <stack.Screen name="Profile" component={ProfileScreen} />
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Forgot" component={ForgotPasswordScreen} />
        <stack.Screen name="About" component={AboutUsScreen} />
        <stack.Screen name="Crime" component={CrimeReportScreen} />
        <stack.Screen name="Camera" component={Camera} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
