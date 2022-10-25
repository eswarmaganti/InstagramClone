import { StyleSheet } from "react-native";

const IMAGE_SIZE = 65;
export default StyleSheet.create({
  story: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  storyImage: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE,
    borderWidth: 3,
    borderColor: "orange",
  },
});
