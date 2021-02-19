import tapListReducer from './../../reducers/tap-list-reducer';

describe('tapListReducer', () => {
  
  let action;
  // const state = {
  //   1:{masterTapList: [{
  //       name: "Fizzbuzz Farmhouse Ale",
  //       brand: "Gateway 2000 Fermentations",
  //       price: "5.50",
  //       alcoholContent: "6.2",
  //       pintQuantity: "124",
  //       id: '123'
  //   }]}
  // }

  const testTap = {
    name: "Lorem Ipsum Lager",
    brand: "Drinkem Upsum Brewing",
    price: "5.50",
    alcoholContent: "7.7",
    pintQuantity: "11",
    id: '456'
  }

  test('Should return default state when action type is null', () => {
    expect(tapListReducer({}, {type: null})).toEqual({});
  });

  
  test('Should add new tap object to master tap list', () => {
    const { name, brand, price, alcoholContent, pintQuantity, id } = testTap;
    action = {
      type: 'ADD_TAP',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintQuantity: pintQuantity,
      id: id  
    };
    expect(tapListReducer({}, action)).toEqual({
      [id]: {
        name: "Lorem Ipsum Lager",
        brand: "Drinkem Upsum Brewing",
        price: "5.50",
        alcoholContent: "7.7",
        pintQuantity: "11",
        id: '456'
      }
    });
  });

  // test('Should do something', () => {
  //   expect().toEqual();
  // });
})

