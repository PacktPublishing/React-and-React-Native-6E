import React from "react";
import { View, Text, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/FontAwesome";
import styles from "./styles";
import { iconNames, IconName } from "./icon-names";

const sections = Object.entries(iconNames).map(([title, data]) => ({
  title,
  data: Array.from(data) as IconName[],
}));

export default function RenderingIcons() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        style={styles.icons}
        sections={sections}
        keyExtractor={(item) => item}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Icon name={item} style={styles.itemIcon} />
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
