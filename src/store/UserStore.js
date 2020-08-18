import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxLogger from "redux-logger";
import ReduxThunk from "redux-thunk";
import axios from "axios";
import userReducer from '../reducers/userReducer';
import tweetsReducer from '../reducers/tweetsReducer';


const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
})

//const logger = (store) => (next) => (action) => {
//    console.log('Action Fired:::UserStore changed', action.type);
//    next(action);
//}

//const error = (store) => (next) => (action) => {
//    try {
//        next(action);
//    } catch (err) {
//        console.log('Error:::', err);
//    }
//}

const middleware = applyMiddleware(ReduxThunk, ReduxLogger);
const store = createStore(reducers, middleware);
//store.subscribe(() => {
//    console.log('UserStore changed', store.getState());
//});

//store.dispatch({type: 'AAA', payload: 'foo' });
//store.dispatch({type: 'DDD', payload: [1, 2] });
//store.dispatch({type: 'EEE'});
//store.dispatch({type: 'BBB', payload: 0 });


store.dispatch((dispatch) => {
    dispatch({ type: "AAA", payload: [] });
    axios.get("http://rest.learncode.aaa.academy/api/wstern/users")
    .then((response) => {
        console.log("response", response);
        dispatch({type: "BBB", payload: response.data});
    })
    .catch((err) => {
        dispatch({type: "EEE"});
    });
})

export default store;
