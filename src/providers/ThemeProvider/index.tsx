"use client";

import "@fontsource/roboto";
import {
	Theme,
	ThemeProvider as ThemeContext,
	createTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

import { TypeChildren } from "@/shared/types/children";

import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { breakpoints } from "@/theme/breakpoints";
import {
	darkPalettePrimary,
	ligthPalettePrimary,
} from "@/theme/palette.primary";

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xs: false;
		sm: false;
		md: false;
		lg: false;
		xl: false;
		ultra: true;
		laptopL: true;
		laptop: true;
		tabletL: true;
		tabletM: true;
		tabletS: true;
		mobile: true;
	}
}

export default function ThemeProvider({ children }: TypeChildren) {
	const [theme, setTheme] = useState<Partial<Theme>>();

	const modeTrigger = useAppSelector(
		(state) => state.rootReducer.theme.modeTrigger
	);

	useEffect(() => {
		const theme = createTheme({
			palette: {
				mode: modeTrigger,
				primary: {
					...(modeTrigger === "dark"
						? { ...darkPalettePrimary }
						: { ...ligthPalettePrimary }),
				},
			},
			typography: {
				h1: {
					fontSize: "16px",
				},
				h2: {
					fontSize: "24px",
				},
			},
			transitions: {
				duration: {
					short: 0.3,
				},
				easing: {
					easeInOut: "s all ease-in-out",
				},
			},
			shape: {
				borderRadius: 5,
			},
			breakpoints: {
				...breakpoints,
			},
			components: {
				MuiPaper: {
					styleOverrides: {
						root: {
							borderRadius: "0px",
							"& *": {
								fontFamily: "Roboto",
								letterSpacing: "1px",
								boxSizing: "border-box",
							},
						},
					},
				},
			},
		});

		setTheme(theme);
	}, [modeTrigger]);

	return (
		<ThemeContext theme={theme ? theme : createTheme({})}>
			{children}
		</ThemeContext>
	);
}
