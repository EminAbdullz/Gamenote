"use client";

import React from "react";

import CustomLink from "@/components/UI/CustomLink";
import Logo from "@/components/UI/Logo";

import Navigation from "./MainNavigation";
import SecondaryNavigation from "./SecondaryNavigation";
import { StyledHeader } from "./styles";

const Header = () => {
	return (
		<StyledHeader component={"header"}>
			<SecondaryNavigation />
			<CustomLink href="/">
				<Logo className="hidden_logo" />
			</CustomLink>
			<Navigation />
		</StyledHeader>
	);
};

export default Header;
