import {SinglePhotoState, SingleActionTypes, SinglePhotoAction,payloadSinglePhoto} from '../../types/singlePhotosets'

const defaultState:SinglePhotoState = {
  photos: {
    title: '',
    ownername: '',
    photo: []
  },
  isFetching: true,
};

export default function singlePhotosetReducer(state = defaultState, action:SinglePhotoAction):SinglePhotoState {
  switch (action.type) {
    case SingleActionTypes.SET_PHOTO:
      return {
        ...state,
        photos: action.payload,
        isFetching: false,
      };
    case SingleActionTypes.SET_PHOTO_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
}

