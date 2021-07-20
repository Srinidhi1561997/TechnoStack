// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers } from 'redux';
// import CognitoReducers from './CognitoReducers';
// import { LOG_OUT, STS_CREDS } from '../Actions/ActionConstants';

const appReducer = combineReducers({
//   cog: CognitoReducers,
});
 
const rootReducer = (state, action) => {
//   if (action.type === LOG_OUT) {
//     AsyncStorage.removeItem('persist:root');
//     state = undefined;
//   }
  return appReducer(state, action);
};
 
export default rootReducer;