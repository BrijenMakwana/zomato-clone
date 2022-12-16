import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.search}>
        <Feather name="search" size={24} color="#E23946" />
      </Pressable>
      <TextInput
        placeholder="Restaurant name or a dish..."
        style={styles.input}
      />
      <Pressable style={styles.mic}>
        <FontAwesome name="microphone" size={22} color="#E23946" />
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F0F0F0",
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
  },
  search: {},
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  mic: {
    borderLeftWidth: 1,
    borderLeftColor: "gray",
    paddingLeft: 15,
    paddingRight: 5,
    // backgroundColor: "red",
  },
});
