const categories = [
  {
    id: "1",
    title: "sort",
  },
  {
    id: "2",
    title: "fast delivery",
  },
  {
    id: "3",
    title: "pure veg",
  },
  {
    id: "4",
    title: "great offers",
  },
  {
    id: "5",
    title: "rating 4.0",
  },
  {
    id: "6",
    title: "new arrivals",
  },
  {
    id: "7",
    title: "cuisines",
  },
  {
    id: "8",
    title: "more",
  },
];

const orderAgainData = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    restaurant: "The Burger Joint",
    duration: 30,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    restaurant: "Pizza Paradise",
    duration: 45,
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
    restaurant: "Sushi Samurai",
    duration: 60,
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    restaurant: "Taco Tuesday",
    duration: 25,
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    restaurant: "Fried Chicken Frenzy",
    duration: 35,
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
    restaurant: "Noodle Nook",
    duration: 40,
  },
  {
    id: "7",
    image:
      "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
    restaurant: "BBQ Bonanza",
    duration: 50,
  },
  {
    id: "8",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    restaurant: "Sandwich Spot",
    duration: 20,
  },
  {
    id: "9",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    restaurant: "Salad Squad",
    duration: 30,
  },
  {
    id: "10",
    image:
      "https://images.unsplash.com/photo-1570696516188-ade861b84a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    restaurant: "Smoothie Station",
    duration: 15,
  },
];

const dishes = [
  {
    id: "1",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/poha-500x500.jpg",
    dishName: "Poha",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1619860860774-1e2e17343432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "sandwitch",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1653850280260-aa3b9e00b230?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    dishName: "Chaat",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "Tea",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "Pure Veg",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    dishName: "Vada",
  },
  {
    id: "7",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "Idli",
  },
  {
    id: "8",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "Dosa",
  },
  {
    id: "9",
    image:
      "https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "paneer",
  },
  {
    id: "10",
    image:
      "https://images.unsplash.com/photo-1549407981-2e656af56b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "rolls",
  },
  {
    id: "11",
    image:
      "https://images.unsplash.com/photo-1601050690294-397f3c324515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "samosa",
  },
  {
    id: "12",
    image:
      "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    dishName: "burger",
  },
];

export { categories, orderAgainData, dishes };