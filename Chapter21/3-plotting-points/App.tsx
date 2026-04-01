import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <MapView
        style={styles.mapView}
        showsPointsOfInterests={false}
        showsUserLocation
        followsUserLocation
      >
        <Marker
          title="Duff Brewery"
          description="Duff beer for me, Duff beer for you"
          coordinate={{
            latitude: 43.8418728,
            longitude: -79.086082,
          }}
        />
        <Marker
          title="Pawtucket Brewery"
          description="New! Patriot Light!"
          coordinate={{
            latitude: 43.8401328,
            longitude: -79.085407,
          }}
        />
      </MapView>
    </View>
  );
}
