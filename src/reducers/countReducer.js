const countReducer = (state = {
    number: 0
}, action) => {
    switch(action.type){
        case "ADD_COUNT":
            return{
                ...state,
                number: action.payload
            };
        default:
            return state;
    };
};
export default countReducer;