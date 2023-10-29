import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { TypeThemeState } from "./types";
import { constantDark, constantLight, constantMode } from "@/constants";

const initialState: TypeThemeState = {
	modeTrigger: Cookies.get(constantMode)
		? (Cookies.get(constantMode) as PaletteMode)
		: constantDark,
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		switchMode: (state) => {
			state.modeTrigger =
				state.modeTrigger === constantDark ? constantLight : constantDark;
		},
	},
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
