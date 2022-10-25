import React from "react";
import { faker } from "@faker-js/faker";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

const DATA = [...Array(10).keys()].map((_, index) => {
  return {
    id: faker.random.alphaNumeric(10),
    image: `https://randomuser.me/api/portraits/${faker.helpers.arrayElement([
      "women",
      "men",
    ])}/${faker.random.numeric(2)}.jpg`,
    name: faker.name.lastName(10),
  };
});

const Stories = () => {
  return (
    <FlatList
      data={DATA}
      horizontal
      showsHorizontalScrollIndicator={false}
      key={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={styles.story}>
            <View>
              <Image source={{ uri: item.image }} style={styles.storyImage} />
            </View>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Stories;
