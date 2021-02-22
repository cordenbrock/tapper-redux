import { combineReducers } from 'redux';
import tapListReducer from './tap-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectTapReducer from './selected-tap-reducer';

const rootReducer = combineReducers({
  masterTapList: tapListReducer,
  formVisibleOnPage: formVisibleReducer,
  selectedTap: selectTapReducer
});

export default rootReducer;