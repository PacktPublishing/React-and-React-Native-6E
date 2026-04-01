import { useState } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import MapView, { Polygon, PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles";

type Overlay = {
  coordinates: { latitude: number; longitude: number }[];
  strokeColor: string;
  strokeWidth: number;
};

const ipaRegion: Overlay = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0695283 },
    { latitude: 43.8537168, longitude: -79.0700046 },
    { latitude: 43.8518394, longitude: -79.0725697 },
    { latitude: 43.8481651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0695283 },
  ],
  strokeColor: "coral",
  strokeWidth: 4,
};

const stoutRegion: Overlay = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0693283 },
    { latitude: 43.8517168, longitude: -79.0710046 },
    { latitude: 43.8518394, longitude: -79.0715697 },
    { latitude: 43.8491651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0693283 },
  ],
  strokeColor: "firebrick",
  strokeWidth: 4,
};

export default function PlottingOverlays() {
  const [selected, setSelected] = useState<"ipa" | "stout">("ipa");
  const [overlays, setOverlays] = useState<Overlay[]>([ipaRegion]);

  function onClickIpa() {
    setSelected("ipa");
    setOverlays([ipaRegion]);
  }

  function onClickStout() {
    setSelected("stout");
    setOverlays([stoutRegion]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View>
        <Text
          style={[styles.ipaText, selected === "ipa" && styles.boldText]}
          onPress={onClickIpa}
        >
          IPA Fans
        </Text>
        <Text
          style={[styles.stoutText, selected === "stout" && styles.boldText]}
          onPress={onClickStout}
        >
          Stout Fans
        </Text>
      </View>
      <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        showsPointsOfInterests={false}
        initialRegion={{
          latitude: 43.8486744,
          longitude: -79.0695283,
          latitudeDelta: 0.002,
          longitudeDelta: 0.04,
        }}
      >
        {overlays.map((v, i) => (
          <Polygon
            key={i}
            coordinates={v.coordinates}
            strokeColor={v.strokeColor}
            strokeWidth={v.strokeWidth}
          />
        ))}
      </MapView>
    </View>
  );
}
