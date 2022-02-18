import { combineReducers } from "redux";
import recommendReducer from "./recommend";
import playerReducer from "./player";

/* 合并reducer */
const reducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
});
export default reducer;
