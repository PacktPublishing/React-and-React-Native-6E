import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
  },

  nav: {
    backgroundColor: "lightgray",
  },

  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  content: {
    fontSize: 23,
    fontWeight: "bold",
  },

  progress: {
    justifyContent: "center",
    width: "60%",
    padding: 1,
  },
});
