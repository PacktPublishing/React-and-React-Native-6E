import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import ProgressBar from "./ProgressBar";
import styles from "./styles";
import { Routes } from "./router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator<Routes>();

const routes = [
  { name: "First", component: First },
  { name: "Second", component: Second },
  { name: "Third", component: Third },
  { name: "Fourth", component: Fourth },
] as const;

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ route, navigation }) => {
              const currentRouteIndex = routes
                .map((r) => r.name)
                .indexOf(route.name);
              const prevRouteName = routes[currentRouteIndex - 1]?.name;
              const nextRouteName = routes[currentRouteIndex + 1]?.name;
              const progress = (currentRouteIndex + 1) / routes.length || 0;
              return {
                headerBackVisible: false,
                headerTitleAlign: "center",
                headerTitle: () => (
                  <View style={styles.progress}>
                    <Text style={styles.title}>{route.name}</Text>
                    <ProgressBar progress={progress} />
                  </View>
                ),
                headerLeft: () => (
                  <Button
                    title="Prev"
                    disabled={currentRouteIndex === 0}
                    onPress={() => prevRouteName &&
                      navigation.navigate(prevRouteName, {
                        progress: progress,
                      })}
                  />
                ),
                headerRight: () => (
                  <Button
                    title="Next"
                    disabled={currentRouteIndex === 3}
                    onPress={() => nextRouteName &&
                      navigation.navigate(nextRouteName, {
                        progress: progress,
                      })}
                  />
                ),
              };
            }}
          >
            {routes.map((routeProps, index) => (
              <Stack.Screen
                key={routeProps.name}
                {...routeProps}
                initialParams={{ progress: (index + 1) / routes.length }}
              />
            ))}

          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
