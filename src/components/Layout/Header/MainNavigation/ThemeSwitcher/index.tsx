"use client";

import { PaletteMode } from "@mui/material";
import Cookies from "js-cookie";
import { FC, useEffect, useState } from "react";

import { StyledThemeSwitcher } from "./styles";
import { DarkModeIcon, LightModeIcon } from "@/icons";
import { useActions } from "@/redux/hooks/useActions";
import { useAppSelector } from "@/redux/hooks/useAppSelector";

const ThemeSwitcher: FC = () => {
	const { switchMode } = useActions();

	const [currentMode, switchCurrentMode] = useState<PaletteMode>();

	const mode = useAppSelector(
		(state) => state?.rootReducer?.theme?.modeTrigger
	);

	useEffect(() => {
		switchCurrentMode(mode);
	}, [mode]);

	const toggleTheme = () => {
		switchMode();
		if (!Cookies.get("mode")) {
			Cookies.set("mode", "light");
			return;
		}

		if (Cookies.get("mode") === "light") {
			Cookies.set("mode", "dark");
			return;
		}

		if (Cookies.get("mode") === "dark") {
			Cookies.set("mode", "light");
			return;
		}
	};

	return (
		<StyledThemeSwitcher onClick={toggleTheme}>
			{currentMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
		</StyledThemeSwitcher>
	);
};

export default ThemeSwitcher;
