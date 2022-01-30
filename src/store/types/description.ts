export interface DescriptionState{
    description: null|string;
    isFetchingDesc: null | boolean;
  }

export enum DescriptionActionTypes{
    SET_DESCRIPTION='SET_DESCRIPTIONS',
    SET_DESC_IS_FETCHING ='SET_DESC_IS_FETCHING',
  }

  interface SetDescriptionsAction{
    type: DescriptionActionTypes.SET_DESCRIPTION;
    payload: string | null;
  }

  interface SetDescPhetchingAction{
    type: DescriptionActionTypes.SET_DESC_IS_FETCHING
    payload:boolean;
  }

export type DescriptionAction = SetDescriptionsAction | SetDescPhetchingAction
