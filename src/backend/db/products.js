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
    amountSaved: "1000",
    image: "/images/men-products/jacket-2.jpg",
    categoryName: "Men",
    rating: 4,
    isWished: false,
    discount: "50%",
    deliveryCharges: "150",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "L",
    delivery: "in 2 days",
  },
  {
    _id: uuid(),
    title: "Men Tshirt",
    price: "1500",
    disCountedPrice: "1200",
    amountSaved: "300",
    image: "/images/men-products/men-tshirt-2.jpg",
    categoryName: "Men",
    rating: 3.6,
    isWished: false,
    discount: "20%",
    deliveryCharges: "100",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "S",
    delivery: "in 3 days",
  },
  {
    _id: uuid(),
    title: "Men`s Jeans",
    price: "3500",
    disCountedPrice: "3000",
    amountSaved: "500",
    image: "/images/men-products/men-pants-1.jpg",
    categoryName: "Men",
    rating: 4.4,
    isWished: false,
    discount: "15%",
    deliveryCharges: "120",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "s",
    delivery: "in 5 days",
  },
  {
    _id: uuid(),
    title: "Men`s Shirts",
    price: "3000",
    disCountedPrice: "2700",
    amountSaved: "300",
    image: "/images/men-products/men-dress-5.jpg",
    categoryName: "Men",
    rating: 4,
    isWished: false,
    discount: "15%",
    deliveryCharges: "100",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "s",
    delivery: "in 3 days",
  },

  // ---------------------- women--------------------------

  {
    _id: uuid(),
    title: "Levis Jeans",
    price: "2000",
    disCountedPrice: "1500",
    amountSaved: "500",
    image: "/images/women-products/women-dress-1.jpg",
    categoryName: "Women",
    rating: 4.5,
    isWished: false,
    discount: "50%",
    deliveryCharges: "250",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "M",
    delivery: "in 3 days",
  },
  {
    _id: uuid(),
    title: "Anika Kurti",
    price: "2500",
    disCountedPrice: "1900",
    amountSaved: "600",
    image: "/images/women-products/women-img-4.jpg",
    categoryName: "Women",
    rating: 3,
    isWished: false,
    discount: "20%",
    deliveryCharges: "200",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "S",
    delivery: "in 2 days",
  },
  {
    _id: uuid(),
    title: "Mufti kurti",
    price: "2200",
    disCountedPrice: "1600",
    amountSaved: "600",
    image: "/images/women-products/women-img-3.jpg",
    categoryName: "Women",
    rating: 3.6,
    isWished: false,
    discount: "23%",
    deliveryCharges: "175",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "L",
    delivery: "in 4 days",
  },
  {
    _id: uuid(),
    title: "Mufti Top",
    price: "3500",
    disCountedPrice: "2900",
    amountSaved: "600",
    image: "/images/women-products/women-dress-6.jpg",
    categoryName: "Women",
    rating: 4.5,
    isWished: false,
    discount: "23%",
    deliveryCharges: "135",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "L",
    delivery: "in 4 days",
  },
  // ---------------- kids-------------------------

  {
    _id: uuid(),
    title: "Kids Costume",
    price: "500",
    disCountedPrice: "400",
    amountSaved: "100",
    image: "/images/kid-dress.jpg",
    categoryName: "Kids",
    rating: 4,
    isWished: false,
    discount: "50%",
    deliveryCharges: "100",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "M",
    delivery: "in 1 days",
  },
  {
    _id: uuid(),
    title: "Kids ethnic wear",
    price: "1000",
    disCountedPrice: "850",
    amountSaved: "150",
    image: "/images/kids-products/kid-2.jpg",
    categoryName: "Kids",
    rating: 3.8,
    isWished: false,
    discount: "15%",
    deliveryCharges: "75",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "S",
    delivery: "in 7 days",
  },
  {
    _id: uuid(),
    title: "F&B Kurta",
    price: "1500",
    disCountedPrice: "1250",
    amountSaved: "250",
    image: "/images/kids-products/kid-3.jpg",
    categoryName: "Kids",
    rating: 4.1,
    isWished: false,
    discount: "10%",
    deliveryCharges: "100",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "M",
    delivery: "in 1 days",
  },
  {
    _id: uuid(),
    title: "Speedo Track suit",
    price: "2500",
    disCountedPrice: "2100",
    amountSaved: "400",
    image: "/images/kids-products/kids-dress-6.jpg",
    categoryName: "Kids",
    rating: 4.1,
    isWished: false,
    discount: "10%",
    deliveryCharges: "100",
    isCarted: false,
    availability: "In stock",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quasi!",
    size: "M",
    delivery: "in 1 days",
  },
];
