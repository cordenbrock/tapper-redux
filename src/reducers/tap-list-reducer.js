import { defaultTaps } from './../defaultTaps/defaultTaps'


export default (state = {}, action) => {
  let newMasterTapList;
  const {  name, brand, price, alcoholContent, pintQuantity, id } = action;
  switch (action.type) {
  case 'ADD_TAP':
    const newTap = {
      [id]: {
        name,
        brand,
        price,
        alcoholContent,
        pintQuantity,
        id
      }
    };
    newMasterTapList = {...state.masterTapList, ...newTap}
    return {
      ...state,
      masterTapList: newMasterTapList
    };
  case 'DELETE_TAP':
    const { [id]: remove, ...rest} = state.masterTapList;
    return {
      ...state,
      masterTapList: rest
    };
  default:
    return state;
  }
};