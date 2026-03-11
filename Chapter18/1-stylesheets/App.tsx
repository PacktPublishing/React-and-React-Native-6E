import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>I'm in a box</Text>
      </View>
    </SafeAreaView>
  );
}
