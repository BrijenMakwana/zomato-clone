import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.search}>
        <Feather name="search" size={20} color="#E23946" />
      </Pressable>
      <TextInput
        placeholder="Restaurant name or a dish..."
        style={styles.input}
      />
      <Pressable style={styles.mic}>
        <FontAwesome name="microphone" size={18} color="#E23946" />
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F0F0F0",
    width: "93%",
    alignSelf: "center",
    borderRadius: 12,
    borderWidth: 0.3,
    borderColor: "gray",
  },
  search: {},
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "500",
  },
  mic: {
    borderLeftWidth: 1,
    borderLeftColor: "gray",
    paddingLeft: 13,
    paddingRight: 5,
  },
});
