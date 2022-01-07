import {
    SET_PHOTO,
    SET_PHOTO_IS_FETCHING
} from '../../constants';

const defaultState = {
    photos: {},
    isFetching: true,

};

export default function singlePhotosetReducer(state = defaultState, action) {
    switch (action.type) {
            case SET_PHOTO:
                return {
                    ...state,
                    photos: action.payload,
                    isFetching: false,
                }
            case SET_PHOTO_IS_FETCHING:
                return {
                    ...state,
                    isFetching: action.payload
                }
                default:
                    return state
    }

}


export const setPhoto = (data) => ({
    type: SET_PHOTO,
    payload: data
});
export const setPhotoIsFetching = (bool) => ({
    type: SET_PHOTO_IS_FETCHING,
    payload: bool
});
