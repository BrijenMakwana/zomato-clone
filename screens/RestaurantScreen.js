import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantHead from "../components/RestaurantHead";
import Dish from "../components/Dish";
import DishCategory from "../components/DishCategory";
import { restaurantMenu } from "../assets/data/data";
import MenuFAB from "../components/MenuFAB";
import { useRoute } from "@react-navigation/native";

const RestaurantScreen = () => {
  const route = useRoute();
  const { restaurant, cuisines, duration, distance, rating } = route.params;
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* restaurant header */}
        <RestaurantHead
          restaurant={restaurant}
          cuisines={cuisines}
          duration={duration}
          distance={distance}
          rating={rating}
        />

        {/* food menu */}
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
      <>
        {/* menu FAB button */}
        <MenuFAB />
      </>
    </>
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
