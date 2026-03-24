import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import Activity from "./Activity";

export default function App() {
  const [fetching, setFetching] = useState(false);

  async function fetchStuff() {
    setFetching(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setFetching(false);
  }

  return (
    <View style={styles.container}>
      <Activity visible={fetching} />
      <Text onPress={fetchStuff}>Fetch Stuff...</Text>
    </View>
  );
}
