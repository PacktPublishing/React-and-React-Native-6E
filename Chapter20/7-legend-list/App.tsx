import { Text, View } from "react-native";
import { LegendList } from "@legendapp/list";
import styles from "./styles";

const data = new Array(100)
  .fill(null)
  .map((v, i) => ({ id: i.toString(), value: `Item ${i}` }));

const MyLegendList = () => (
  <LegendList
    data={data}
    renderItem={({ item }) => (
      <>
        <Text style={styles.item}>{item.value}</Text>
      </>
    )}
    keyExtractor={(item) => item.id}
    recycleItems // Optional: Enables recycling for extra speed
    estimatedItemSize={28}
  />
);


export default function App() {
  return (
    <View style={styles.container}>
      <MyLegendList />
    </View>
  );
}
