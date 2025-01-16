import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import changeColor from './changeColor';
import taskReducer from './taskReducer';


const rootReducer = combineReducers({
  counter: counterReducer,
  another: changeColor,
  task: taskReducer
});

export default rootReducer;