import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { TypeToken } from "./types";

const initialState: TypeToken = {
	token: Cookies.get("token") ? (Cookies.get("token") as string) : "",
	admin: Cookies.get("admin")
		? (JSON.parse(Cookies.get("admin") as string) as boolean)
		: false,
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

		setAdmin: (state, { payload }: PayloadAction<boolean>) => {
			if (payload) {
				state.admin = payload;
				Cookies.set("admin", JSON.stringify(payload));
			}
		},
		removeAdmin: (state) => {
			state.token = "";
			Cookies.remove("admin");
		},
	},
});

export const tokenActions = tokenSlice.actions;

export default tokenSlice.reducer;
