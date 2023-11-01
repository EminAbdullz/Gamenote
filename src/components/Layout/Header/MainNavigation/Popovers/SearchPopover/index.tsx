import { Button, Popover } from "@mui/material";
import React from "react";

import CustomLink from "@/components/UI/CustomLink";

import { StyledSearchPopover } from "./styles";
import { SearchIcon, SettingIcon } from "@/icons";

const SearchPopover: React.FC = () => {
	const [anchorSearchingLink, setAnchorSearchingLink] =
		React.useState<HTMLButtonElement | null>(null);

	const handleClickOpenSearchingLinkPopover = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		setAnchorSearchingLink(event.currentTarget);
	};

	const handleClosesSearchingLinkPopover = () => {
		setAnchorSearchingLink(null);
	};

	const openSearchingLink = Boolean(anchorSearchingLink);
	const searchingLinkId = openSearchingLink
		? "searching_link-popover"
		: undefined;

	return (
		<StyledSearchPopover>
			<Button
				className="searching_button"
				aria-describedby={searchingLinkId}
				variant="contained"
				onClick={handleClickOpenSearchingLinkPopover}
			>
				<CustomLink className="searching_link">
					<SearchIcon />
				</CustomLink>
			</Button>
			<Popover
				id={searchingLinkId}
				open={openSearchingLink}
				onClose={handleClosesSearchingLinkPopover}
				anchorEl={anchorSearchingLink}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				{" "}
				SETTING
			</Popover>
		</StyledSearchPopover>
	);
};

export default SearchPopover;
