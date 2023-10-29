import React, { FC } from "react";

import CustomLink from "@/components/UI/CustomLink";

import { StyledSecondaryNavigation } from "./styles";
import { BurgerMenu, HomeIcon } from "@/icons";

const SecondaryNavigation: FC = () => {
	return (
		<StyledSecondaryNavigation>
			<CustomLink className="burger_menu_link">
				<BurgerMenu />
			</CustomLink>
			<CustomLink className="home_link">
				<HomeIcon />
			</CustomLink>
		</StyledSecondaryNavigation>
	);
};

export default SecondaryNavigation;
