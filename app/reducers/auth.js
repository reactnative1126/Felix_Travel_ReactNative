import * as actionTypes from "@actions/actionTypes";
const initialState = {
    login: {
        success: false
    },
    user: {
        lang: "en"
    }
};

export default (state = initialState, action = {}) => {
    console.log('state', state, 'action', action)
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                user: state.user,
                login: action.data,
            };
        case actionTypes.CHANGE_LANGUAGE:
            return {
                ...state,
                user: {
                    ...state.user,
                    lang: action.lang
                }
            };
        default:
            return state;
    }
};
