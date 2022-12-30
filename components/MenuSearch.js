import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const MenuSearch = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.search}>
        <Feather name="search" size={20} color="#E23946" />
      </Pressable>
      <TextInput placeholder="Search menu" style={styles.input} />
    </View>
  );
};

export default MenuSearch;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: 130,
    alignSelf: "center",
    borderRadius: 15,
    borderWidth: 0.1,
    borderColor: "gray",
    height: 35,
  },
  search: {},
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    fontWeight: "500",
  },
});
