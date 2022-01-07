import {
    SET_PHOTOSETS,
    SET_CURRENT_PAGE,
    SET_IS_FETCHING
} from '../../constants';


const defaultState = {
    sets: [],
    isFetching: true,

}

export default function photosetsReducer(state = defaultState, action) {
    switch (action.type) {
            case SET_PHOTOSETS:
                return {
                    ...state,
                    sets: [...state.sets, ...action.payload.photosets.photoset],
                    isFetching: false,
                    pages: action.payload.photosets.pages
                 }
            case SET_IS_FETCHING:
                return {
                    ...state,
                    isFetching: action.payload
                }
            case SET_CURRENT_PAGE:
                    return {
                        ...state,
                        currentPage: action.payload
                    }
            default:
                return state
    }

};


export const setPhotosets = (data) => ({
    type: SET_PHOTOSETS,
    payload: data
});
export const setIsFetching = (bool) => ({
    type: SET_IS_FETCHING,
    payload: bool
});
export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
});