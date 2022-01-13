import {DescriptionState,DescriptionActionTypes, DescriptionAction} from '../../types/description'

const defaultState:DescriptionState = {
  description: null,
  isFetchingDesc:null
};

export default function descriptionReducer(state = defaultState, action:DescriptionAction):DescriptionState {
  switch (action.type) {
    case DescriptionActionTypes.SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
        isFetchingDesc: false,
      };
    case DescriptionActionTypes.SET_DESC_IS_FETCHING:
      return {
        ...state,
        isFetchingDesc: action.payload,
      };
    default:
      return state;
  }
}

