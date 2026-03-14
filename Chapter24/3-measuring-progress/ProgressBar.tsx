import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { ProgressBar as PaperProgressBar } from "react-native-paper";

type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <View style={styles.progress}>
      <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
      <PaperProgressBar progress={progress} />
    </View>
  );
}
