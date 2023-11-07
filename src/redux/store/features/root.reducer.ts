import { combineReducers } from "@reduxjs/toolkit";

import themeSlice from "./slices/theme/";
import tokenSlice from "./slices/token/";

export const rootReducer = combineReducers({
	theme: themeSlice,
	token: tokenSlice,
});
