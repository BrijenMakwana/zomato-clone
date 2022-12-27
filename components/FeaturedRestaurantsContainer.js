import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FeaturedRestaurant from "./FeaturedRestaurant";
import { restaurantData } from "../assets/data/data";

const FeaturedRestaurantsContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Featured restaurants</Text>
      <View style={styles.list}>
        <FlatList
          data={restaurantData}
          renderItem={({ item }) => (
            <FeaturedRestaurant
              image={item.image}
              restaurant={item.restaurant}
              duration={item.duration}
              distance={item.distance}
              rating={item.rating}
              discount={item.discount}
              isVeg={item.isVeg}
              bill={item.bill}
              cuisines={item.cuisines}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default FeaturedRestaurantsContainer;

const styles = StyleSheet.create({
  container: {
    width: "93%",
    alignSelf: "center",
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  list: {
    flexDirection: "row",
    marginTop: 2,
    paddingVertical: 10,
  },
});
