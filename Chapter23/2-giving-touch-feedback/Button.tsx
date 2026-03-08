import React from "react";
import { Text, TouchableOpacity, TouchableHighlight } from "react-native";
import styles from "./styles";

type ButtonProps = {
  label: string;
  onPress: () => void;
};
/* TouchableOpacity and TouchableHighlight components are legacy.
   React Native documentation recommends Pressable API.
   It is being shown here for demonstration purposes.    
*/
export const OpacityButton = ({ label, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export const HighlightButton = ({ label, onPress }: ButtonProps) => {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor="rgba(112,128,144,0.3)"
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableHighlight>
  );
};
