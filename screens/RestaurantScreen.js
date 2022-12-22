import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantHead from "../components/RestaurantHead";
import Dish from "../components/Dish";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantHead />
      <View style={styles.dishes}>
        <Dish />
        <Dish />
        <Dish />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FB",
  },
  dishes: {
    marginTop: 10,
    backgroundColor: "#fff",
    flex: 1,
  },
});
