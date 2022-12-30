import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Category from "../components/Category";
import { categories, restaurantData } from "../assets/data/data";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import OrderAgainContainer from "../components/OrderAgainContainer";
import DishComponentContainer from "../components/DishComponentContainer";
import FeaturedRestaurantsContainer from "../components/FeaturedRestaurantsContainer";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Restaurants */}

      <FlatList
        data={restaurantData}
        renderItem={({ item }) => (
          <RestaurantCard
            image={item.image}
            restaurant={item.restaurant}
            duration={item.duration}
            distance={item.distance}
            bill={item.bill}
            rating={item.rating}
            discount={item.discount}
            isVeg={item.isVeg}
            totalOrder={item.totalOrder}
            cuisines={item.cuisines}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* header */}
            <Header />
            {/* TODO: make it sticky */}
            {/* search bar */}
            <SearchBar />
            {/* categories */}
            <View style={styles.categories}>
              <FlatList
                data={categories}
                renderItem={({ item }) => <Category title={item.title} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>

            {/* banners */}
            <Banner image={require("../assets/images/banner_1.jpg")} />
            <Banner image={require("../assets/images/banner_2.jpg")} />
            {/* order again */}
            <OrderAgainContainer />
            {/* dishes */}
            <DishComponentContainer />
            {/* Featured restaurants */}
            <FeaturedRestaurantsContainer />
            <Text style={styles.restaurantCardHeading}>
              {restaurantData.length * 30} restaurants around you
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  categories: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingLeft: 14,
  },
  restaurantCardHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 12,
    marginBottom: 2,
  },
});
