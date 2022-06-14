import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

module.exports = {
  wp(a) {
    return width * (a / 100);
  },

  hp(a) {
    return height * (a / 100);
  },
};
