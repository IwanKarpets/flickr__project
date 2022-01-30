export enum apiConstatnts {
  API_KEY = 'f6146b5aea320305af01030c6fc04c59',
  USER_ID = '48600090482@N01',
  PER_PAGE = '9',
  FORMAT = 'json',
  NOJSONCLB = '1',
};

export interface paramsInterface {
  method: string | any;
  api_key: string;
  user_id: string;
  page?: string | number;
  photoset_id?: string | undefined;
  per_page: string | number;
  format: string;
  nojsoncallback: string;
};
