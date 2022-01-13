export interface SinglePhotoState{
    photos:payloadSinglePhoto;
    isFetching: boolean;
    
  }
  
  export interface payloadSinglePhoto{
    title: string,
    ownername: string,
    photo: any[]
  }
  
  export enum SingleActionTypes{
    SET_PHOTO="SET_PHOTO",
    SET_PHOTO_IS_FETCHING = "SET_PHOTO_IS_FETCHING",
  }
  

  interface SetSinglePhotosetsAction{
    type: SingleActionTypes.SET_PHOTO;
    payload: payloadSinglePhoto;
  
  }
  
  interface SetsPhotoPhetchingAction{
    type: SingleActionTypes.SET_PHOTO_IS_FETCHING;
    payload:boolean;
  }
  
  
   export type SinglePhotoAction = SetSinglePhotosetsAction | SetsPhotoPhetchingAction
  