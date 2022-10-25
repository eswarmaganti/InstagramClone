import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import logo from "../../../assets/logo.png";
import styles from "./style";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <AntDesign
            name="plussquareo"
            size={24}
            color="#232323"
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="facebook-messenger" size={24} color="#232323" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
