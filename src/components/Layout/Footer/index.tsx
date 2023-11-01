"use client";

import { Divider, Stack } from "@mui/material";
import React from "react";

import CustomContainer from "@/components/UI/Container";
import CustomLink from "@/components/UI/CustomLink";
import Logo from "@/components/UI/Logo";

import BottomNavigation from "./BottomNavigation";
import { StyledFooter } from "./styles";
import { FbIcon, InstIcon, WpIcon } from "@/icons";

const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<CustomContainer>
				<Stack className="logo_and_links_container">
					<Logo />
					<Stack className="social_media_links_container">
						<CustomLink className="icon_link">
							<WpIcon className="icon" />
						</CustomLink>
						<CustomLink className="icon_link">
							<InstIcon className="icon" />
						</CustomLink>
						<CustomLink className="icon_link">
							<FbIcon className="icon" />
						</CustomLink>
					</Stack>
				</Stack>
				<Divider />
				<BottomNavigation />
			</CustomContainer>
		</StyledFooter>
	);
};

export default Footer;
