import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Coupon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={30}
          color="#1A71EA"
        />
      </View>

      <View style={styles.couponInfo}>
        <Text style={styles.offer} numberOfLines={1}>
          Up to 100 Mobikique
        </Text>
        <Text style={styles.code}>use code MBKFEST</Text>
      </View>
    </View>
  );
};

export default Coupon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF4FF",
    flexDirection: "row",
    width: 250,
    height: 70,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  couponInfo: {
    backgroundColor: "#fff",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 15,
  },
  offer: {
    fontSize: 17,
    fontWeight: "600",
  },
  code: {
    fontSize: 14,
    color: "#202020",
    marginTop: 5,
  },
});
