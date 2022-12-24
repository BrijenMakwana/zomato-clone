import { FlatList, SafeAreaView, StyleSheet, View, Text } from "react-native";
import React from "react";
import RestaurantHead from "../components/RestaurantHead";
import DishCategory from "../components/DishCategory";
import { restaurantMenu } from "../assets/data/data";
import MenuFAB from "../components/MenuFAB";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// veg or non-veg
const FoodType = (props) => {
  const { type } = props;

  return (
    <View style={styles.foodTypeContainer}>
      <MaterialCommunityIcons
        name="square-rounded"
        size={23}
        color={type === "veg" ? "#259547" : "#A95B41"}
      />
      <Text style={styles.foodTypeText}>
        {type === "veg" ? "Veg" : "Non-veg"}
      </Text>
    </View>
  );
};

const RestaurantScreen = () => {
  const route = useRoute();
  const { restaurant, cuisines, duration, distance, rating } = route.params;
  return (
    <SafeAreaView>
      <FlatList
        data={restaurantMenu}
        renderItem={({ item }) => (
          <DishCategory
            key={item.id}
            categoryName={item.categoryName}
            dishes={item.dishes}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          // restaurant header
          <>
            <RestaurantHead
              restaurant={restaurant}
              cuisines={cuisines}
              duration={duration}
              distance={distance}
              rating={rating}
            />
            <View
              style={{
                flexDirection: "row",
                marginLeft: 13,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              <FoodType type="veg" />
              <FoodType type="nonveg" />
            </View>
          </>
        }
      />
      {/* menu fab button */}
      <MenuFAB />
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FB",
  },
  foodTypeContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },
  foodTypeText: {
    marginLeft: 2,
    fontSize: 12,
    fontWeight: "500",
  },
});
