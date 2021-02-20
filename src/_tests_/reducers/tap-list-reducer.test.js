import tapListReducer from './../../reducers/tap-list-reducer';

describe('tapListReducer', () => {
  
  let action;
  const testTap1 = {
    name: "Lorem Ipsum Lager",
    brand: "Drinkem Upsum Brewing",
    price: "5.50",
    alcoholContent: "7.7",
    pintQuantity: "11",
    id: '456'
  }
  const testTap2 = {
    name: "Fizzbuzz Farmhouse Ale",
    brand: "Gateway 2000 Fermentations",
    price: "5.50",
    alcoholContent: "6.2",
    pintQuantity: "124",
    id: 1
}
  const state = {
    masterTapList: {[1]: testTap1, 
                    [2]: testTap2
    }
  }

  test('Should return default state when action type is null', () => {
    expect(tapListReducer({}, {type: null})).toEqual({});
  });

  
  test('Should add new tap object to empty master tap list', () => {
    const { name, brand, price, alcoholContent, pintQuantity, id } = testTap1;
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


  test('Should delete tap object from master tap list', () => {
    action = {
      type: 'DELETE_TAP',
      id: 1
    }
    expect(tapListReducer(state, action)).toEqual({
      masterTapList: { [2]: testTap2 }
    }
    );
  });
})

