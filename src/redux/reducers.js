import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import changeColor from './changeColor';


const rootReducer = combineReducers({
  counter: counterReducer,
  another: changeColor,
});

export default rootReducer;