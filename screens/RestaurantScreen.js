import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantHead from "../components/RestaurantHead";
import DishCategory from "../components/DishCategory";
import { restaurantMenu } from "../assets/data/data";
import MenuFAB from "../components/MenuFAB";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import MenuSearch from "../components/MenuSearch";
import DishInfo from "../components/DishInfo";

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

// DishInfo modal buttons
const AddItemBtns = (props) => {
  const { price } = props;
  return (
    <Pressable style={styles.addItemBtnContainer}>
      <View style={styles.quantityContainer}>
        {/* add */}
        <Pressable style={styles.quantityBtn}>
          <Entypo name="minus" size={18} color="#E23946" />
        </Pressable>
        {/* quantity */}
        <Text style={styles.quantity}>1</Text>
        {/* remove */}
        <Pressable style={styles.quantityBtn}>
          <Entypo name="plus" size={18} color="#E23946" />
        </Pressable>
      </View>

      {/* price calc */}
      <Pressable style={styles.priceBtn}>
        <Text style={styles.priceBtnText}>Add item ₹{price}</Text>
      </Pressable>
    </Pressable>
  );
};

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { restaurant, cuisines, duration, distance, rating } = route.params;
  const [isDishModalOpen, setIsDishModalOpen] = useState(false);
  const [dishInfo, setDishInfo] = useState({});

  // header
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </Pressable>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MenuSearch />
          <Pressable
            style={{
              backgroundColor: "#fff",
              width: 35,
              height: 35,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              marginLeft: 10,
              borderWidth: 0.1,
              borderColor: "gray",
            }}
          >
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { opacity: isDishModalOpen ? 0.3 : 1 }]}
    >
      <FlatList
        data={restaurantMenu}
        renderItem={({ item }) => (
          <DishCategory
            key={item.id}
            categoryName={item.categoryName}
            dishes={item.dishes}
            setIsDishModalOpen={setIsDishModalOpen}
            setDishInfo={setDishInfo}
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
              {/* veg and non-veg */}
              <FoodType type="veg" />
              <FoodType type="nonveg" />
            </View>
          </>
        }
      />

      {/* dish information modal */}
      <Modal
        visible={isDishModalOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsDishModalOpen(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          {/* close button */}
          <Pressable
            style={styles.closeBtn}
            onPress={() => setIsDishModalOpen(false)}
          >
            <AntDesign name="close" size={20} color="#fff" />
          </Pressable>
          <View style={styles.dishModal}>
            {/* dish information */}
            <DishInfo
              dishName={dishInfo.dishName}
              dishImage={dishInfo.dishImage}
              isBestSeller={dishInfo.isBestSeller}
              rating={dishInfo.rating}
              reviews={dishInfo.reviews}
            />
            {/* action buttons */}
            <AddItemBtns price={dishInfo.price} />
          </View>
        </View>
      </Modal>
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
  closeBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1C1C1C",
    width: 40,
    height: 40,
    borderRadius: 25,
    alignSelf: "center",
  },
  dishModal: {
    backgroundColor: "#F4F6FB",
    height: 500,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  addItemBtnContainer: {
    backgroundColor: "#fff",
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF6F7",
    width: "30%",
    borderRadius: 10,
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: "#E23946",
  },
  quantityBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 15,
  },
  quantity: {
    color: "#000",
    fontSize: 15,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  priceBtn: {
    width: "65%",
    backgroundColor: "#E23946",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  priceBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
