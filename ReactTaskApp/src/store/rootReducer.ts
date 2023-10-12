import {combineReducers} from 'redux';
import HomeReducer from '../screen/home/redux/HomeReducer';
const rootReducer = combineReducers({
  home: HomeReducer,
});

export default rootReducer;
