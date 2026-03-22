import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";
import styles from "./styles";

export default function WhereAmI() {
  const [address, setAddress] = useState("loading...");
  const [longitude, setLongitude] = useState<number | undefined>();
  const [latitude, setLatitude] = useState<number | undefined>();

  useEffect(() => {
    async function setPosition({ coords }: Location.LocationObject) {
      setLongitude(coords.longitude);
      setLatitude(coords.latitude);

      const [result] = await Location.reverseGeocodeAsync(coords);
      if (result) {
        const parts = [
          result.name,
          result.street,
          result.city,
          result.region,
          result.country,
        ];
        setAddress(parts.filter(Boolean).join(", "));
      }
    }

    let watcher: Location.LocationSubscription;

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setPosition(location);

      watcher = await Location.watchPositionAsync(
        { accuracy: Location.LocationAccuracy.Highest },
        setPosition
      );
    })();

    return () => {
      watcher?.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {latitude}</Text>
      <Text style={styles.label}>Longitude: {longitude}</Text>
    </View>
  );
}
