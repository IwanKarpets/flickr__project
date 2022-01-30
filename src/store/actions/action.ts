import { Dispatch } from 'redux';
import { SetsAction, SetsActionTypes } from '../types/photosets';
import { SinglePhotoAction, SingleActionTypes } from '../types/singlePhotosets';
import {
  DescriptionAction,
  DescriptionActionTypes,
} from '../types/description';
import { apiConstatnts, paramsInterface } from '../../apiTypes';
import axios from 'axios';

export const getPhotoSets = (page: number) => async (dispatch: Dispatch<SetsAction>) => {
  try {
    dispatch({
      type: SetsActionTypes.SET_IS_FETCHING,
      payload: true,
    });
    const paramsReq:paramsInterface = {
      method: 'flickr.photosets.getList',
      api_key: apiConstatnts.API_KEY,
      user_id: apiConstatnts.USER_ID,
      page,
      per_page: apiConstatnts.PER_PAGE,
      format: apiConstatnts.FORMAT,
      nojsoncallback: apiConstatnts.NOJSONCLB,
    };
    const response = await axios.get('https://www.flickr.com/services/rest/', { params: paramsReq });
    const { pages, photoset } = response.data.photosets;
    const photosetsData = { pages, photoset };
    dispatch({ type: SetsActionTypes.SET_PHOTOSETS, payload: photosetsData });
  } catch (e:any|unknown) {
    throw new Error(e);
  }
};

export const getSinglePhotoSets = (id: string | undefined) => async (dispatch: Dispatch<SinglePhotoAction>) => {
  try {
    dispatch({
      type: SingleActionTypes.SET_PHOTO_IS_FETCHING,
      payload: true,
    });
    const paramsReq:paramsInterface = {
      method: 'flickr.photosets.getPhotos',
      api_key: apiConstatnts.API_KEY,
      user_id: apiConstatnts.USER_ID,
      photoset_id: id,
      per_page: apiConstatnts.PER_PAGE,
      format: apiConstatnts.FORMAT,
      nojsoncallback: apiConstatnts.NOJSONCLB,
    };
    const response = await axios.get('https://www.flickr.com/services/rest/', { params: paramsReq });
    const { ownername, title, photo } = response.data.photoset;
    const singlePhotoset = { ownername, title, photo };
    dispatch({
      type: SingleActionTypes.SET_PHOTO,
      payload: singlePhotoset,
    });
  } catch (e:any|unknown) {
    throw new Error(e);
  }
};

export const getDescriptionPhotoSets = (id: string | undefined) => async (dispatch: Dispatch<DescriptionAction>) => {
  try {
    dispatch({
      type: DescriptionActionTypes.SET_DESC_IS_FETCHING,
      payload: true,
    });
    const paramsReq: paramsInterface = {
      method: 'flickr.photosets.getInfo',
      api_key: apiConstatnts.API_KEY,
      user_id: apiConstatnts.USER_ID,
      photoset_id: id,
      per_page: apiConstatnts.PER_PAGE,
      format: apiConstatnts.FORMAT,
      nojsoncallback: apiConstatnts.NOJSONCLB,
    };
    const response = await axios.get('https://www.flickr.com/services/rest/', { params: paramsReq });
    const description = response.data.photoset.description._content;
    dispatch({
      type: DescriptionActionTypes.SET_DESCRIPTION,
      payload: description,
    });
  } catch (e:any|unknown) {
    throw new Error(e);
  }
};
