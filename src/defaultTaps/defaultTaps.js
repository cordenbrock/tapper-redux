import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();
const id3 = v4();


export const defaultTaps = {
  [id1]: {
    name: "Fizzbuzz Farmhouse Ale",
    brand: "Gateway 2000 Fermentations",
    price: "5.50",
    alcoholContent: "6.2",
    pintQuantity: "124",
    id: id1
  },
  [id2]: {
    name: "Lorem Ipsum Lager",
    brand: "Drinkem Upsum Brewing",
    price: "5.50",
    alcoholContent: "7.7",
    pintQuantity: "11",
    id: id2
  },
  [id3]: {
    name: "Recursion-Cursed Kölsch",
    brand: "Haskell or High Water Alehouse",
    price: "7.00",
    alcoholContent: "13.0",
    pintQuantity: "0",
    id: id3
  }
}