import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Category from "../components/Category";
import { categories } from "../assets/data/data";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import OrderAgainContainer from "../components/OrderAgainContainer";
import DishComponentContainer from "../components/DishComponentContainer";
import FeaturedRestaurantsContainer from "../components/FeaturedRestaurantsContainer";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
    </ScrollView>
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
    paddingVertical: 13,
    paddingLeft: 8,
  },
});
