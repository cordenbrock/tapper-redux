import { v4 } from 'uuid';

export const defaultTaps = [
  {
    name: "Fizzbuzz Farmhouse Ale",
    brand: "Gateway 2000 Fermentations",
    price: "5.50",
    alcoholContent: "6.2",
    pintQuantity: "124",
    id: v4()
  },
  {
    name: "Lorem Ipsum Lager",
    brand: "Drinkem Upsum Brewing",
    price: "5.50",
    alcoholContent: "7.7",
    pintQuantity: "11",
    id: v4()
  },
  {
    name: "Recursion-Cursed Kölsch",
    brand: "Haskell or High Water Alehouse",
    price: "7.00",
    alcoholContent: "13.0",
    pintQuantity: "0",
    id: v4()
  }
]