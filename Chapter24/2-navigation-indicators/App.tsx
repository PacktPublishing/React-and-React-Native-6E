import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import { Routes } from "./router";

const Stack = createNativeStackNavigator<Routes>();

function App() {
  return (
    <NavigationContainer>
        <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
