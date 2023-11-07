import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { TypeToken } from "./types";

const initialState: TypeToken = {
	token: Cookies.get("token") ? (Cookies.get("token") as string) : "",
};

const tokenSlice = createSlice({
	name: "token",
	initialState,
	reducers: {
		setToken: (state, { payload }: PayloadAction<string>) => {
			if (payload) {
				state.token = payload;
				Cookies.set("token", payload);
			}
		},
		removeToken: (state) => {
			state.token = "";
			Cookies.remove("token");
		},
	},
});

export const tokenActions = tokenSlice.actions;

export default tokenSlice.reducer;
