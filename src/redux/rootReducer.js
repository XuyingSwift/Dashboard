import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import userIconReducer from './userIcon/userIcon.reducer';

export default combineReducers({
    user: userReducer,
    userIcon: userIconReducer
});