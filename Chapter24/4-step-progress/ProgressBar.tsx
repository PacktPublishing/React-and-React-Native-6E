import React from "react";
import { ProgressBar as PaperProgressBar } from "react-native-paper";

type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  return <PaperProgressBar progress={progress} />;
}
