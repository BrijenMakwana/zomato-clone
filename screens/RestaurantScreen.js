import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantHead from "../components/RestaurantHead";
import Dish from "../components/Dish";
import DishCategory from "../components/DishCategory";
import { restaurantMenu } from "../assets/data/data";

const RestaurantScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <RestaurantHead />
      <View style={styles.dishes}>
        {restaurantMenu.map((item) => (
          <DishCategory
            key={item.id}
            categoryName={item.categoryName}
            dishes={item.dishes}
          />
        ))}
      </View>
    </ScrollView>
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
    flex: 1,
  },
});
