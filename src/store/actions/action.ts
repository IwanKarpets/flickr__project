import { SetsAction, SetsActionTypes } from "../types/photosets";
import { SinglePhotoAction, SingleActionTypes } from "../types/singlePhotosets";
import {
  DescriptionAction,
  DescriptionActionTypes,
} from "../types/description";
import API from "../../utils/API";
import { Dispatch } from "redux";

export const getPhotoSets =
  (page: number) => async (dispatch: Dispatch<SetsAction>) => {
    try {
      dispatch({
        type: SetsActionTypes.SET_IS_FETCHING,
        payload: true,
      });
      const response = await API.get(
        `?method=flickr.photosets.getList&api_key=f6146b5aea320305af01030c6fc04c59&user_id=48600090482%40N01&page=${page}&per_page=9&format=json&nojsoncallback=1`
      );
      let { pages, photoset } = response.data.photosets;
      let photosetsData = { pages, photoset };
      dispatch({ type: SetsActionTypes.SET_PHOTOSETS, payload: photosetsData });
    } catch (e) {
      console.log(e);
    }
  };

export const getSinglePhotoSets =
  (id: string | undefined) => async (dispatch: Dispatch<SinglePhotoAction>) => {
    try {
      dispatch({
        type: SingleActionTypes.SET_PHOTO_IS_FETCHING,
        payload: true,
      });
      const response = await API.get(
        `?method=flickr.photosets.getPhotos&api_key=f6146b5aea320305af01030c6fc04c59&photoset_id=${id}&user_id=48600090482%40N01&format=json&nojsoncallback=1`
      );
      const { ownername, title, photo } = response.data.photoset;
      let singlePhotoset = { ownername, title, photo };
      dispatch({
        type: SingleActionTypes.SET_PHOTO,
        payload: singlePhotoset,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getDescriptionPhotoSets =
  (id: string | undefined) => async (dispatch: Dispatch<DescriptionAction>) => {
    try {
      dispatch({
        type: DescriptionActionTypes.SET_DESC_IS_FETCHING,
        payload: true,
      });
      const response = await API.get(
        `?method=flickr.photosets.getInfo&api_key=f6146b5aea320305af01030c6fc04c59&photoset_id=${id}&user_id=48600090482%40N01&format=json&nojsoncallback=1`
      );
      let description = response.data.photoset.description._content;
      dispatch({
        type: DescriptionActionTypes.SET_DESCRIPTION,
        payload: description,
      });
    } catch (e) {
      console.log(e);
    }
  };
