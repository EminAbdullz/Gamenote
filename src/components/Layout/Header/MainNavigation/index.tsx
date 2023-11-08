"use client";

import React from "react";

import CustomLink from "@/components/UI/CustomLink";

import Admin from "./Admin";
import BasketPopover from "./Popovers/BasketPopover";
import LogInPopover from "./Popovers/LogInPopover";
import SearchPopover from "./Popovers/SearchPopover";
import SettingPopover from "./Popovers/SettingPopover";
import ThemeSwitcher from "./ThemeSwitcher";
import { StyledNavigation } from "./styles";
import { FavoriteIcon } from "@/icons";
import { useAppSelector } from "@/redux/hooks/useAppSelector";

const MainNavigation: React.FC = () => {
	const admin: boolean = useAppSelector(
		(state) => state?.rootReducer?.token?.admin
	);
	const [currentAdmin, setCurrentAdmin] = React.useState<boolean>(false);

	React.useEffect(() => {
		setCurrentAdmin(admin);
	}, [admin]);

	return (
		<StyledNavigation component={"nav"}>
			{currentAdmin ? <Admin /> : null}
			<ThemeSwitcher />
			<SettingPopover />
			<SearchPopover />
			<CustomLink className="favorite_link">
				<FavoriteIcon />
			</CustomLink>
			<BasketPopover />
			<LogInPopover />
		</StyledNavigation>
	);
};

export default MainNavigation;
