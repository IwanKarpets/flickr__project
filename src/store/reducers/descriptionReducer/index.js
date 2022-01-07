import {
    SET_DESCRIPTION,
    SET_DESC_IS_FETCHING
} from '../../constants';

const defaultState = {
    description: {},
};

export default function descriptionReducer(state = defaultState, action) {
    switch (action.type) {
            case SET_DESCRIPTION:
                return {
                    ...state,
                    description: action.payload,
                    isFetchingDesc: false
                }
            case SET_DESC_IS_FETCHING:
                return {
                    ...state,
                    isFetchingDesc: action.payload
                }
            default:
                return state
    }

};


export const setDescription = (data) => ({
    type: SET_DESCRIPTION,
    payload: data
});


export const setDescriptionIsFetching = (bool) => ({
    type: SET_DESC_IS_FETCHING,
    payload: bool
});