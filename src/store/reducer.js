import {combineReducers} from 'redux';
import recommendReducer from './recommend';
const  reducer = combineReducers({
    recommend:recommendReducer
});

export default reducer;  