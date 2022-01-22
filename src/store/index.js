import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // 开启redux的开发工具

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;