import React, { useState } from "react";
import { ImageSourcePropType, View } from "react-native";
import styles from "./styles";
import LazyImage from "./LazyImage";
import Button from "./Button";

const remote = "https://reactjs.org/logo-og.png";

export default function LazyLoading() {
  const [source, setSource] = useState<ImageSourcePropType | null>(null);

  return (
    <View style={styles.container}>
      <LazyImage
        style={styles.image}
        source={source}
      />
      <Button
        label="Load Remote"
        onPress={() => {
          setSource({ uri: remote });
        }}
      />
    </View>
  );
}
