import rootReducer from '../../reducers/root-reducer';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import tapListReducer from '../../reducers/tap-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTapList: {},
      formVisibleOnPage: false
    });
  });

test('Check that initial state of tapListReducer matches root reducer', () => {
    expect(store.getState().masterTapList).toEqual(tapListReducer(undefined, { type: null }));
  });
  
test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
});