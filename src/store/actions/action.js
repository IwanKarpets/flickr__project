import {
    setPhotosets,
    setIsFetching,
} from '../reducers/photosetsReducer';
import {
    setPhoto,
    setPhotoIsFetching
} from '../reducers/singlePhotosetReducer';

import {
    setDescription,
    setDescriptionIsFetching
} from '../reducers/descriptionReducer';
import API from '../../utils/API.js';


export const getPhotoSets = (page) => async (dispatch) => {
    try {
        dispatch(setIsFetching(true));
        const response = await API.get(`?method=flickr.photosets.getList&api_key=f6146b5aea320305af01030c6fc04c59&user_id=48600090482%40N01&page=${page}&per_page=9&format=json&nojsoncallback=1`)
        dispatch(setPhotosets(response.data));
    } catch (e) {
        console.log(e)
    }

};

export const getSinglePhotoSets = (id) => async (dispatch) => {
    try {
        dispatch(setPhotoIsFetching(true));
        const response = await API.get(`?method=flickr.photosets.getPhotos&api_key=f6146b5aea320305af01030c6fc04c59&photoset_id=${id}&user_id=48600090482%40N01&format=json&nojsoncallback=1`)
        dispatch(setPhoto(response.data));
    } catch (e) {
        console.log(e);
    };

};

export const getDescriptionPhotoSets = (id) => async (dispatch) => {
    try {
        dispatch(setDescriptionIsFetching(true));
        const response = await API.get(`?method=flickr.photosets.getInfo&api_key=f6146b5aea320305af01030c6fc04c59&photoset_id=${id}&user_id=48600090482%40N01&format=json&nojsoncallback=1`);
        let description = response.data.photoset.description._content;
        dispatch(setDescription(description));
    } catch (e) {
        console.log(e);
    }

};
