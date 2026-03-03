import React from "react";
import { Text, FlatList } from "react-native";
import styles from "./styles";

type Props = {
  data: { key: string; value: string }[];
  fetchItems: () => Promise<void>;
};

export default function List({ data, fetchItems }: Props) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      onEndReached={fetchItems}
    />
  );
}
