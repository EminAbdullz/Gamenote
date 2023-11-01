import { Box, Button, Icon, IconButton } from "@mui/material";
import React from "react";

import CustomLink from "@/components/UI/CustomLink";

import SettingPopover from "./Popovers/SettingPopover";
import { StyledNavigation } from "./styles";
import { FavoriteIcon, LogInIcon, SearchIcon } from "@/icons";

const MainNavigation: React.FC = () => {
	////! Basket Link Popover Logic
	// const [anchorBasketLink, setAnchorBasketLink] =
	// 	React.useState<HTMLButtonElement | null>(null);

	// const handleClickOpenBasketLinkPopover = (
	// 	event: React.MouseEvent<HTMLButtonElement>
	// ) => {
	// 	setAnchorBasketLink(event.currentTarget);
	// };

	// const handleCloseBaksetPopover = () => {
	// 	setAnchorSettingLink(null);
	// };

	// const openBaksetLink = Boolean(anchorBasketLink);
	// const basketLinkId = openBaksetLink ? "basket_link-popover" : undefined;

	return (
		<StyledNavigation component={"nav"}>
			<SettingPopover />
			<CustomLink className="searching_link">
				<SearchIcon />
			</CustomLink>
			<CustomLink className="favorite_link">
				<FavoriteIcon />
			</CustomLink>
			<CustomLink className="logIn_link">
				<LogInIcon />
			</CustomLink>
		</StyledNavigation>
	);
};

export default MainNavigation;
