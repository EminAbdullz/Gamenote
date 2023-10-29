import React, { FC } from "react";

import CustomLink from "@/components/UI/CustomLink";

import { StyledNavigation } from "./styles";
import {
	BasketIcon,
	FavoriteIcon,
	LogInIcon,
	SearchIcon,
	SettingIcon,
} from "@/icons";

const MainNavigation: FC = () => {
	return (
		<StyledNavigation component={"nav"}>
			<CustomLink className="searching_link">
				<SearchIcon />
			</CustomLink>
			<CustomLink className="favorite_link">
				<FavoriteIcon />
			</CustomLink>
			<CustomLink className="setting_link">
				<SettingIcon />
			</CustomLink>
			<CustomLink className="basket_link">
				<BasketIcon />
			</CustomLink>
			<CustomLink className="logIn_link">
				<LogInIcon />
			</CustomLink>
		</StyledNavigation>
	);
};

export default MainNavigation;
