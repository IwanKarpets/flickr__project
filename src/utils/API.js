import axios from "axios";


export default axios.create({
  baseURL: "https://www.flickr.com/services/rest/",
  responseType: "json",
  headers: {
    'Content-Type': 'application/json charset=utf-8',
  },

});