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
  const {
    price,
    quantity,
    setQuantity,
    closeDishInfo,
    setTotalOrderItems,
    setTotalOrderAmount,
  } = props;
  const [thisQuantity, setThisQuantity] = useState(1);

  const addFoodItem = () => {
    if (thisQuantity >= 10) return;
    setThisQuantity((prev) => prev + 1);
  };

  const deleteFoodItem = () => {
    if (thisQuantity <= 1) return;
    setThisQuantity((prev) => prev - 1);
  };

  const addToOrder = () => {
    setQuantity(quantity + thisQuantity);
    setTotalOrderItems((prev) => prev + thisQuantity);
    // total amount to order
    setTotalOrderAmount((prev) => prev + thisQuantity * price);
    closeDishInfo();
  };

  return (
    <Pressable style={styles.addItemBtnContainer}>
      <View style={styles.quantityContainer}>
        {/* add */}
        <Pressable style={styles.quantityBtn} onPress={deleteFoodItem}>
          <Entypo name="minus" size={18} color="#E23946" />
        </Pressable>
        {/* quantity */}
        <Text style={styles.quantity}>{thisQuantity}</Text>
        {/* remove */}
        <Pressable style={styles.quantityBtn} onPress={addFoodItem}>
          <Entypo name="plus" size={18} color="#E23946" />
        </Pressable>
      </View>

      {/* price calc */}
      <Pressable style={styles.priceBtn} onPress={addToOrder}>
        <Text style={styles.priceBtnText}>
          Add item ₹{price * thisQuantity}
        </Text>
      </Pressable>
    </Pressable>
  );
};

// bill component
const ShowTotalBillAmount = (props) => {
  const { totalOrderItems, totalOrderAmount } = props;

  return (
    <View
      style={{
        width: "100%",
        marginTop: "auto",
        backgroundColor: "#fff",
        padding: 15,
      }}
    >
      <Pressable style={styles.totalBillContainer}>
        <View style={styles.totalAmountContainer}>
          {/* total items */}
          <Text style={styles.totalItems}>
            {totalOrderItems} {totalOrderItems === 1 ? "item" : "items"}
          </Text>
          {/* total amount */}
          <Text style={styles.totalAmount}>
            ₹{totalOrderAmount} <Text style={{ fontSize: 9 }}>plus taxes</Text>
          </Text>
        </View>
        {/* next */}
        <View style={styles.nextContainer}>
          <Text style={styles.nextText}>next</Text>
          <MaterialIcons name="arrow-right" size={24} color="#fff" />
        </View>
      </Pressable>
    </View>
  );
};

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { restaurant, cuisines, duration, distance, rating } = route.params;
  const [isDishModalOpen, setIsDishModalOpen] = useState(false);
  const [dishInfo, setDishInfo] = useState({});
  const [openQuickMenu, setOpenQuickMenu] = useState(false);
  const [totalOrderItems, setTotalOrderItems] = useState(0);
  const [totalOrderAmount, setTotalOrderAmount] = useState(0);

  // header
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()} style={{ width: 50 }}>
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

  // close DishInfo modal
  const closeDishInfo = () => {
    setIsDishModalOpen(false);
  };

  return (
    <SafeAreaView
      style={[styles.container, { opacity: isDishModalOpen ? 0.2 : 1 }]}
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
            setTotalOrderItems={setTotalOrderItems}
            setTotalOrderAmount={setTotalOrderAmount}
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
          <Pressable style={styles.closeBtn} onPress={closeDishInfo}>
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
            <AddItemBtns
              price={dishInfo.price}
              quantity={dishInfo.quantity}
              setQuantity={dishInfo.setQuantity}
              closeDishInfo={closeDishInfo}
              setTotalOrderItems={setTotalOrderItems}
              setTotalOrderAmount={setTotalOrderAmount}
            />
          </View>
        </View>
      </Modal>
      {/* quick menu */}
      {openQuickMenu && (
        <View
          style={[
            styles.quickMenuContainer,
            { bottom: totalOrderItems > 0 ? 175 : 85 },
          ]}
        >
          <Text style={styles.quickMenuHeading}>menu</Text>
          <Text style={styles.quickMenuSubHeading}>
            Quickly switch between different categories
          </Text>
          {/* menu */}
          {restaurantMenu.map((item) => (
            <View style={styles.menuItem} key={item.id}>
              <Text style={styles.menuCategoryName}>{item.categoryName}</Text>
              <Text style={styles.menuCategoryPrice}>{item.dishes.length}</Text>
            </View>
          ))}
        </View>
      )}

      {/* menu fab button */}
      {/* TODO: move it up when bill amount visible */}
      <MenuFAB
        setOpenQuickMenu={setOpenQuickMenu}
        openQuickMenu={openQuickMenu}
        topPosition={totalOrderItems > 0 ? 550 : 640}
      />

      {/* total order */}
      {/* TODO: show only when quantity>0 */}
      {totalOrderItems > 0 && (
        <ShowTotalBillAmount
          totalOrderItems={totalOrderItems}
          totalOrderAmount={totalOrderAmount}
        />
      )}
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
  // quick menu styles
  quickMenuContainer: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: "92%",
    shadowColor: "rgb(28,28,28)",
    shadowOpacity: 0.5,
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  quickMenuHeading: {
    fontSize: 19,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  quickMenuSubHeading: {
    fontSize: 15,
    color: "#585858",
    marginTop: 10,
    fontWeight: "400",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  menuCategoryName: {
    flex: 1,
    fontSize: 15,
    color: "#585858",
    fontWeight: "500",
    textTransform: "capitalize",
  },
  menuCategoryPrice: {
    fontSize: 15,
    color: "#585858",
    fontWeight: "500",
  },
  // total bill amount styles
  totalBillContainer: {
    backgroundColor: "#E23946",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  totalAmountContainer: {
    flex: 1,
  },
  totalItems: {
    color: "#fff",
    fontSize: 10,
    textTransform: "uppercase",
  },
  totalAmount: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 7,
  },
  nextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nextText: {
    color: "#fff",
    fontSize: 15,
    textTransform: "capitalize",
    fontWeight: "500",
  },
});
