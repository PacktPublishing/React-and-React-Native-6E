import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Box from "./Box";
import { SafeAreaView } from "react-native-safe-area-context";

const boxes = new Array(10).fill(null).map((v, i) => i + 1);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {boxes.map((i) => (
        <Box key={i}>#{i}</Box>
      ))}
    </SafeAreaView>
  );
}
