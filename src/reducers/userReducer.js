const userReducer = (state={}, action) => {
    switch(action.type) {
        case "AAA":
        state = {...state, user: action.payload };
        break;

        case "BBB":
        break;

        case "EEE":
        //throw new Error('FooBar');
        break;
    }
    return state;
}


export default userReducer;
