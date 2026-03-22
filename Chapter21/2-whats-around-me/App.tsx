import { useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import styles from "./styles";

export default function App() {
  useEffect(() => {
    Location.requestForegroundPermissionsAsync();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <MapView
        style={styles.mapView}
        showsUserLocation
        followsUserLocation
      />
    </View>
  );
}
