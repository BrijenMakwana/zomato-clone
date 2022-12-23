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

const restaurantData = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    restaurant: "The Burger Joint",
    duration: 30,
    distance: 8,
    bill: 300,
    rating: 4.1,
    discount: 50,
    isVeg: true,
    totalOrder: 5000,
    cuisines: ["street foods", "mithai", "desserts"],
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    restaurant: "Pizza Paradise",
    duration: 45,
    distance: 10,
    bill: 200,
    rating: 4.5,
    discount: 10,
    isVeg: true,
    totalOrder: 2000,
    cuisines: ["fast food", "maharashtrian"],
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
    restaurant: "Sushi Samurai",
    duration: 60,
    distance: 3,
    bill: 100,
    rating: 4.0,
    discount: 70,
    isVeg: false,
    totalOrder: 2460,
    cuisines: ["street foods", "chinese"],
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    restaurant: "Taco Tuesday",
    duration: 25,
    distance: 9,
    bill: 500,
    rating: 2.4,
    discount: 25,
    isVeg: true,
    totalOrder: 8000,
    cuisines: ["pizza"],
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    restaurant: "Fried Chicken Frenzy",
    duration: 35,
    distance: 6,
    bill: 300,
    rating: 3.9,
    discount: 14,
    isVeg: false,
    totalOrder: 200,
    cuisines: ["pizza", "fast food", "pasta"],
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
    restaurant: "Noodle Nook",
    duration: 40,
    distance: 2,
    bill: 200,
    rating: 3.2,
    discount: null,
    isVeg: false,
    totalOrder: 1000,
    cuisines: ["north indian", "chinese", "biryani"],
  },
  {
    id: "7",
    image:
      "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
    restaurant: "BBQ Bonanza",
    duration: 50,
    distance: 1,
    bill: 250,
    rating: 4.1,
    discount: 70,
    isVeg: true,
    totalOrder: 700,
    cuisines: ["street foods"],
  },
  {
    id: "8",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    restaurant: "Sandwich Spot",
    duration: 20,
    distance: 12,
    bill: 500,
    rating: 1.0,
    discount: null,
    isVeg: true,
    totalOrder: 1040,
    cuisines: ["north indian", "chinese"],
  },
  {
    id: "9",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    restaurant: "Salad Squad",
    duration: 30,
    distance: 8,
    bill: 600,
    rating: 4.8,
    discount: 30,
    isVeg: false,
    totalOrder: 50,
    cuisines: ["street foods", "chinese", "north indian"],
  },
  {
    id: "10",
    image:
      "https://images.unsplash.com/photo-1570696516188-ade861b84a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    restaurant: "Smoothie Station",
    duration: 15,
    distance: 4,
    bill: 780,
    rating: 3.7,
    discount: null,
    isVeg: true,
    totalOrder: 4009,
    cuisines: ["pizza"],
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

const coupons = [
  {
    id: "1",
    offer: "20% OFF up to ₹50",
    code: "use code TRYNEW",
  },
  {
    id: "2",
    offer: "Free Delivery",
    code: "above ₹1000",
  },
  {
    id: "3",
    offer: "Flat ₹100 OFF",
    code: "use code ONECARDNEW",
  },
  {
    id: "4",
    offer: "up to ₹100 Mobikwik",
    code: "use code MBKFEST",
  },
  {
    id: "5",
    offer: "Flat ₹150 OFF",
    code: "use code CITI150",
  },
];

const restaurantMenu = [
  {
    id: "1",
    categoryName: "breakfast",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "2",
    categoryName: "pizza",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "3",
    categoryName: "healthy",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "4",
    categoryName: "lunch",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "5",
    categoryName: "sweat",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "6",
    categoryName: "drinks",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "7",
    categoryName: "dinner",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "8",
    categoryName: "south indian",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "9",
    categoryName: "burgers",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "10",
    categoryName: "bread",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
];

export { categories, restaurantData, dishes, coupons, restaurantMenu };
