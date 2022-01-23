import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import photosetsReducer from "./reducers/photosetsReducer";
import singlePhotosetReducer from "./reducers/singlePhotosetReducer";
import descriptionReducer from "./reducers/descriptionReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  photoset: photosetsReducer,
  singlePhotoset: singlePhotosetReducer,
  description: descriptionReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>

export { store };
