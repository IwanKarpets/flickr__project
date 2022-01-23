import {
  SetsState,
  SetsAction,
  SetsActionTypes,
  payloadSetsInterface,
} from "../../types/photosets";

const defaultState: SetsState = {
  sets: [],
  isFetching: true,
  pages: null,
};

export default function photosetsReducer(
  state = defaultState,
  action: SetsAction
): SetsState {
  switch (action.type) {
    case SetsActionTypes.SET_PHOTOSETS:
      return {
        ...state,
        sets: [...state.sets, ...action.payload.photoset],
        isFetching: false,
        pages: action.payload.pages,
      };
    case SetsActionTypes.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
}
