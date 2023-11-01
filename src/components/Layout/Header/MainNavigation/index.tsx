import { Box, Button, Icon, IconButton } from "@mui/material";
import React from "react";

import CustomLink from "@/components/UI/CustomLink";

import BasketPopover from "./Popovers/BasketPopover";
import LogInPopover from "./Popovers/LogInPopover";
import SearchPopover from "./Popovers/SearchPopover";
import SettingPopover from "./Popovers/SettingPopover";
import { StyledNavigation } from "./styles";
import { FavoriteIcon, LogInIcon, SearchIcon } from "@/icons";

const MainNavigation: React.FC = () => {
	return (
		<StyledNavigation component={"nav"}>
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
