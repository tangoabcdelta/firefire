import { createStore } from 'redux';

const reducer = function(state, action) {
    switch(action.type) {
        case "INC":
        state = state + action.payload;
        break;

        case "DEC":
        state = state - action.payload;
        break;
    }
    return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log("store changed", store.getState());
});


store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: -1 });
store.dispatch({ type: "DEC", payload: -1 });
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 3 });


export default store;
