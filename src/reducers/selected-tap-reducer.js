export default (state = null, action) => {
  const { selectedTap } = action;
  switch (action.type) {
    case 'SELECT_TAP':
      return selectedTap;
    case 'DESELECT_TAP':
      return null;
    default:
      return state;
  };
};