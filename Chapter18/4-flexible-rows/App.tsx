import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Box from "./Box";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Box>#1</Box>
      <Box>#2</Box>
    </SafeAreaView>
  );
}
