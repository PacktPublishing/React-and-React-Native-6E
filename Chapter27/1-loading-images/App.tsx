import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const reactLogo = "https://reactjs.org/logo-og.png";
const relayLogo = require("./assets/relay.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: reactLogo }} />
      <Image style={styles.image} source={relayLogo} />
    </View>
  );
}
