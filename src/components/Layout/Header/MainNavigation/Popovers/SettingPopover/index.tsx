"use client";

import { Button, Popover } from "@mui/material";
import React from "react";

import CustomLink from "@/components/UI/CustomLink";

import LangSwitcher from "./LangSwitcher";
import { StyledSetting } from "./styles";
import { SettingIcon } from "@/icons";

const SettingPopover: React.FC = () => {
	//! Popover logic
	const [anchorSettingLink, setAnchorSettingLink] =
		React.useState<HTMLButtonElement | null>(null);

	const handleClickOpenSettingLinkPopover = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		setAnchorSettingLink(event.currentTarget);
	};

	const handleCloseSettingLinkPopover = () => {
		setAnchorSettingLink(null);
	};

	const openSettingLink = Boolean(anchorSettingLink);
	const settingLinkId = openSettingLink ? "setting_link-popover" : undefined;

	return (
		<StyledSetting>
			<Button
				className="setting_button"
				aria-describedby={settingLinkId}
				variant="contained"
				onClick={handleClickOpenSettingLinkPopover}
			>
				<CustomLink className="setting_link">
					<SettingIcon />
				</CustomLink>
			</Button>
			<Popover
				id={settingLinkId}
				open={openSettingLink}
				onClose={handleCloseSettingLinkPopover}
				anchorEl={anchorSettingLink}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<LangSwitcher />
			</Popover>
		</StyledSetting>
	);
};

export default SettingPopover;
