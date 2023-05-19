import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description: "Mens fashion",
    type: "FILTER_MEN",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description: "Womens fashion",
    type: "FILTER_WOMEN",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description: "Kids fashion",
    type: "FILTER_KIDS",
  },
];
