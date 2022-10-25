import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import Stories from "../../components/Stories";
const FeedScreen = () => {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header />
      <ScrollView>
        <Stories />
      </ScrollView>
    </View>
  );
};

export default FeedScreen;
