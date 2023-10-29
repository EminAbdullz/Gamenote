"use client";

import React from "react";

import Logo from "@/components/UI/Logo";

import Navigation from "./MainNavigation";
import SecondaryNavigation from "./SecondaryNavigation";
import { StyledHeader } from "./styles";

const Header = () => {
	return (
		<StyledHeader component={"header"}>
			<SecondaryNavigation />
			<Logo className="hidden_logo" />
			<Navigation />
		</StyledHeader>
	);
};

export default Header;
