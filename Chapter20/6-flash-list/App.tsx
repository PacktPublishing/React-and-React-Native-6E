import { Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import styles from "./styles";

const data = new Array(100)
  .fill(null)
  .map((v, i) => ({ key: i.toString(), value: `Item ${i}` }));

export default function App() {
  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
}
