export interface SetsState {
  sets: any[];
  isFetching: boolean;
  pages: null | number;
}

export interface payloadSetsInterface {
  photoset: any[];
  pages: number;
}

export enum SetsActionTypes {
  SET_PHOTOSETS = 'SET_PHOTOSETS',
  SET_IS_FETCHING = 'SET_IS_FETCHING',
}

interface SetPhotosetsAction {
  type: SetsActionTypes.SET_PHOTOSETS;
  payload: payloadSetsInterface;
}

interface SetsPhetchingAction {
  type: SetsActionTypes.SET_IS_FETCHING;
  payload: boolean;
}

export type SetsAction = SetPhotosetsAction | SetsPhetchingAction;
