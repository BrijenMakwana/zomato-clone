import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Coupon = (props) => {
  const { offer, code } = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={25}
          color="#1A71EA"
        />
      </View>

      <View style={styles.couponInfo}>
        <Text style={styles.offer} numberOfLines={1}>
          {offer}
        </Text>
        <Text style={styles.code}>{code}</Text>
      </View>
    </View>
  );
};

export default Coupon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF4FF",
    flexDirection: "row",
    width: 210,
    height: 60,
    borderWidth: 1,
    borderColor: "#7CB9E8",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 15,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: 50,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  couponInfo: {
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    borderRadius: 20,
    paddingLeft: 10,
    paddingVertical: 15,
    flex: 1,
  },
  offer: {
    fontSize: 14,
    fontWeight: "600",
  },
  code: {
    fontSize: 11,
    color: "#202020",
    marginTop: 2,
  },
});
