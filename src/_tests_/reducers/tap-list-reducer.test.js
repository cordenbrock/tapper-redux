import tapListReducer from './../../reducers/tap-list-reducer';

describe('tapListReducer', () => {
  
  test('Should return default state when action type is null', () => {
    expect(tapListReducer({}, {type: null})).toEqual({});
  });



  // test('Should do something', () => {
  //   expect().toEqual();
  // });
})

