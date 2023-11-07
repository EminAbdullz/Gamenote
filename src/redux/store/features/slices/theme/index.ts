import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { TypeThemeState } from "./types";

const initialState: TypeThemeState = {
	modeTrigger: Cookies.get("mode")
		? (Cookies.get("mode") as PaletteMode)
		: "dark",
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		switchMode: (state) => {
			state.modeTrigger = state.modeTrigger === "dark" ? "light" : "dark";
		},
	},
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
