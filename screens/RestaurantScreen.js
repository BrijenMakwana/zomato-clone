import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantHead from "../components/RestaurantHead";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantHead />
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FB",
  },
});
