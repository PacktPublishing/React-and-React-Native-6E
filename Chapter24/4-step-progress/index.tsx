import React from "react";
import { registerRootComponent } from "expo";
import { PaperProvider } from "react-native-paper";
import App from "./App";

function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

registerRootComponent(Main);
