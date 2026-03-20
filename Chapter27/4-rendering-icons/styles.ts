import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
  },

  icons: {
    alignSelf: "stretch",
  },

  sectionHeader: {
    padding: 10,
    backgroundColor: "ghostwhite",
    color: "slategrey",
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  itemIcon: {
    padding: 10,
    color: "slategrey",
  },

  itemText: {
    color: "slategrey",
  },
});
