import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  let newMasterTapList;

  const {  name, brand, price, alcoholContent, pintQuantity, id } = action;
  let newTap = {
    [id]: {
      name,
      brand,
      price,
      alcoholContent,
      pintQuantity,
      id
    }
  };
  switch (action.type) {
  case c.ADD_TAP:
    newMasterTapList = {...newTap}
    return {
      ...state,
      ...newMasterTapList
    };
  case c.DELETE_TAP:
    const { [id]: remove, ...rest} = state;
    return {
      ...rest
    };
  case c.POUR_PINT:
    newMasterTapList = {...newTap}
    return {
      ...state,
      ...newMasterTapList
    };
    case c.RESTOCK_TAP:
      newMasterTapList = {...newTap}
      return {
        ...state,
        ...newMasterTapList
      };
  default:
    return state;
  }
};