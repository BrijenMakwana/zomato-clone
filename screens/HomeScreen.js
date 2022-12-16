import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Category from "../components/Category";
import { categories } from "../assets/data/data";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categories}>
        <FlatList
          data={categories}
          renderItem={({ item }) => <Category title={item.title} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  categories: {
    flexDirection: "row",
    paddingVertical: 15,
  },
});
