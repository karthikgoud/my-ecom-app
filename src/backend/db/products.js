import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Jacket Men`s",
    price: "3000",
    disCountedPrice: "2000",
    image: "/images/jacket-2.jpg",
    categoryName: "Men",
    rating: 4,
    isWished: false,
    discount: "50%",
  },

  {
    _id: uuid(),
    title: "Dress Women`s",
    price: "2000",
    disCountedPrice: "2000",
    image: "/images/women-dress-1.jpg",
    categoryName: "Women",
    rating: 3,
    isWished: false,
    discount: "50%",
  },

  {
    _id: uuid(),
    title: "Kids Costume",
    price: "500",
    disCountedPrice: "2000",
    image: "/images/kid-dress.jpg",
    categoryName: "Kids",
    rating: 4,
    isWished: false,
    discount: "50%",
  },
];
