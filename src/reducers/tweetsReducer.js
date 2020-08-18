const tweetsReducer = (state=[], action) => {
    switch(action.type) {
        case "CCC":
        break;

        case "DDD":
        state = {...state, tweets: action.payload };
        break;
    }
    return state;
}


export default tweetsReducer;
