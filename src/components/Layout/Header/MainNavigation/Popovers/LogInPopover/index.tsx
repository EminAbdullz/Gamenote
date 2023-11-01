import { Button, Popover } from "@mui/material";
import React from "react";

import CustomLink from "@/components/UI/CustomLink";

import { LogInIcon } from "@/icons";
import { StyledLoginPopover } from "./styles";

const LogInPopover: React.FC = () => {
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
					<LogInIcon />
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
				{" "}
				SETTING
			</Popover>
		</StyledLoginPopover>
	);
};

export default LogInPopover;
