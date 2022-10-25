const { StyleSheet } = require("react-native");

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logo: {
    height: 60,
    width: 130,
    resizeMode: "contain",
  },
});
