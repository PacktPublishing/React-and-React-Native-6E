import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import styles from "./styles";

const connectedMap = {
  none: "Disconnected",
  unknown: "Disconnected",
  cellular: "Connected",
  wifi: "Connected",
  bluetooth: "Connected",
  ethernet: "Connected",
  wimax: "Connected",
  vpn: "Connected",
  other: "Connected",
} as const;

export default function App() {
  const [connected, setConnected] = useState<string | null>(null);

  useEffect(() => {
    function onNetworkChange(connection: NetInfoState) {
      setConnected(connectedMap[connection.type]);
    }

    NetInfo.fetch().then(onNetworkChange);
    const unsubscribe = NetInfo.addEventListener(onNetworkChange);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>{connected}</Text>
    </View>
  );
}
