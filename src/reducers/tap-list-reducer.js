export default (state = {}, action) => {
  const {  name, brand, price, alcoholContent, pintQuantity, id } = action;
  switch (action.type) {
  case 'ADD_TAP':
    return Object.assign({}, state, {
      [id]: {
        name,
        brand,
        price,
        alcoholContent,
        pintQuantity,
        id
      }
    });
  case 'DELETE_TAP':
    return {};
  default:
    return state;
  }
};