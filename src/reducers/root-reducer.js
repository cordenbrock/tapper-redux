import { combineReducers } from 'redux';
import tapListReducer from './tap-list-reducer';
import formVisibleOnPage from './form-visible-reducer';

const rootReducer = combineReducers({
  masterTapList: tapListReducer,
  formVisibleOnPage: formVisibleOnPage
});

export default rootReducer;