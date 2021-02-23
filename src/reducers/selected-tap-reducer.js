import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedTap } = action;
  switch (action.type) {
    case c.SELECT_TAP:
      return selectedTap;
    case c.DESELECT_TAP:
      return null;
    default:
      return state;
  };
};