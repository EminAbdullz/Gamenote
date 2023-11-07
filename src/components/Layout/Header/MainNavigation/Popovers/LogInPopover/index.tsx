"use client";

import { Button, Popover } from "@mui/material";
import React from "react";

import CustomLink from "@/components/UI/CustomLink";

import useCheckCurrentToken from "@/hooks/checkCurrentToken";

import Auth from "./Auth";
import LogOut from "./LogOut";
import { StyledLoginPopover } from "./styles";
import { LogInIcon, UserIcon } from "@/icons";
import { useAppSelector } from "@/redux/hooks/useAppSelector";

const LogInPopover: React.FC = () => {
	//! Popover logic
	const [anchorLogInLink, setAnchorLogInLink] =
		React.useState<HTMLButtonElement | null>(null);

	const handleClickOpenLogInLinkPopover = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		setAnchorLogInLink(event.currentTarget);
	};

	const handleCloseLogInPopover = () => {
		setAnchorLogInLink(null);
	};

	const openLogInLink = Boolean(anchorLogInLink);
	const LogInLinkId = openLogInLink ? "login_link-popover" : undefined;

	//! Auth

	const token: string = useCheckCurrentToken();

	return (
		<StyledLoginPopover>
			{" "}
			<Button
				className="login_button"
				aria-describedby={LogInLinkId}
				variant="contained"
				onClick={handleClickOpenLogInLinkPopover}
			>
				<CustomLink className="login_link">
					{!token ? <LogInIcon /> : <UserIcon />}
				</CustomLink>
			</Button>
			<Popover
				id={LogInLinkId}
				open={openLogInLink}
				onClose={handleCloseLogInPopover}
				anchorEl={anchorLogInLink}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				{!token ? <Auth /> : <LogOut />}
			</Popover>
		</StyledLoginPopover>
	);
};

export default LogInPopover;
