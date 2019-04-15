const initialState = {
    userId: null
};

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_OR_SET_USER_ID": {
            return {
                ...state,
                userId: action.payload.userId
            };
        }
        default:
            return {...state};
    }
};

export default userDataReducer;
