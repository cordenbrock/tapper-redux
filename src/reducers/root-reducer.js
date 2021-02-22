import { combineReducers } from 'redux';
import tapListReducer from './tap-list-reducer';
import formVisibleOnPage from "./form-visible-reducer";

const rootReducer = combineReducers({
  masterTaplist: tapListReducer,
  formVisibleOnPage: formVisibleReducer
});

export default rootReducer;