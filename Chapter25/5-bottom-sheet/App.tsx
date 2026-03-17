import React, { useCallback, useRef, useState } from "react";
import { Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: "$79.99",
    description:
      "Over-ear headphones with 30-hour battery and active noise cancellation.",
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    price: "$129.99",
    description:
      "Compact TKL layout with Cherry MX switches and RGB backlight.",
  },
  {
    id: "3",
    name: "USB-C Hub",
    price: "$39.99",
    description: "7-in-1 hub with HDMI, SD card reader, and 100W PD charging.",
  },
];

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selected, setSelected] = useState<Product>(products[0]);

  const handleOpen = useCallback((product: Product) => {
    setSelected(product);
    bottomSheetRef.current?.expand();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row} onPress={() => handleOpen(item)}>
            <Text style={styles.rowName}>{item.name}</Text>
            <Text style={styles.rowPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={["45%"]}
        enablePanDownToClose
        backdropComponent={(props) => <BottomSheetBackdrop {...props} />}
      >
        <BottomSheetView style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>{selected.name}</Text>
          <Text style={styles.sheetPrice}>{selected.price}</Text>
          <Text style={styles.sheetDescription}>{selected.description}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    paddingTop: 60,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "lightsteelblue",
  },
  rowName: { fontSize: 16, color: "slategrey" },
  rowPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "slategrey",
  },
  sheetContent: { padding: 24 },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "slategrey",
    marginBottom: 4,
  },
  sheetPrice: {
    fontSize: 16,
    color: "steelblue",
    marginBottom: 12,
  },
  sheetDescription: {
    fontSize: 14,
    color: "slategrey",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "steelblue",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  addButtonText: { color: "white", fontWeight: "bold" },
});
