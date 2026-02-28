import React from "react";
import { View } from "react-native";
import styles from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function Row({ children }: Props) {
  return (
    <View style={styles.row}>
      {children}
    </View>
  );
}
