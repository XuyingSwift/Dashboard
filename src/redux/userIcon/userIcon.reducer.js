import userIconActionTypes from './userIcon.actionTypes';

const INITIAL_STATE = {
    hidden: true
}

const userIconReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case userIconActionTypes.TOGGLE_USER_ICON_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default userIconReducer;