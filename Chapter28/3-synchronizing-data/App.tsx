import React, { useState, useEffect, useMemo } from "react";
import { Text, View, Switch } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";
import { set, get, Key } from "./store";

export default function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  
  const setters = useMemo(
    () =>
      new Map([
        ["first", setFirst],
        ["second", setSecond],
        ["third", setThird],
      ]),
    []
  );

  function save(key: Key) {
    return (value: boolean) => {
      set(key, value).then(
        (connected) => {
          setters.get(key)?.(value);
          setMessage(connected ? null : "Saved Offline");
        },
        (err) => {
          setMessage(err);
        }
      );
    };
  }

  useEffect(() => {
    NetInfo.fetch().then(() =>
      get().then(
        (items) => {
          for (const [key, value] of Object.entries(items)) {
            setters.get(key)?.(value);
          }
        },
        (err) => {
          setMessage(err);
        }
      )
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <View>
        <Text>First</Text>
        <Switch value={first} onValueChange={save("first")} />
      </View>
      <View>
        <Text>Second</Text>
        <Switch value={second} onValueChange={save("second")} />
      </View>
      <View>
        <Text>Third</Text>
        <Switch value={third} onValueChange={save("third")} />
      </View>
    </View>
  );
}
