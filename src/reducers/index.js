import { combineReducers } from 'redux';
import tapListReducer from './tap-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectedTapReducer from './selected-tap-reducer';
import toggleEditingReducer from "./toggle-editing-reducer";

const rootReducer = combineReducers({
  masterTapList: tapListReducer,
  formVisibleOnPage: formVisibleReducer,
  selectedTap: selectedTapReducer,
  isEditing: toggleEditingReducer
});

export default rootReducer;