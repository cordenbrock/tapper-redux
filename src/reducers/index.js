import { combineReducers } from 'redux';
import tapListReducer from './tap-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectedTapReducer from './selected-tap-reducer';

const rootReducer = combineReducers({
  masterTapList: tapListReducer,
  formVisibleOnPage: formVisibleReducer,
  selectedTap: selectedTapReducer
});

export default rootReducer;