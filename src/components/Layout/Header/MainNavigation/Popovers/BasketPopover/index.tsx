import { Button, Popover } from "@mui/material";
import React from "react";


import { BasketIcon, } from "@/icons";
import CustomLink from "@/components/UI/CustomLink";
import { StyledBasket } from "./styles";

const BasketPopover: React.FC = () => {
	const [anchorBasketLink, setAnchorBasketLink] =
		React.useState<HTMLButtonElement | null>(null);

	const handleClickOpenBasketLinkPopover = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		setAnchorBasketLink(event.currentTarget);
	};

	const handleCloseBaksetPopover = () => {
		setAnchorBasketLink(null);
	};

	const openBaksetLink = Boolean(anchorBasketLink);
	const basketLinkId = openBaksetLink ? "basket_link-popover" : undefined;

	return (
		<StyledBasket>
			{" "}
			<Button
				className="basket_button"
				aria-describedby={basketLinkId}
				variant="contained"
				onClick={handleClickOpenBasketLinkPopover}
			>
				<CustomLink className="basket_link">
					<BasketIcon />
				</CustomLink>
			</Button>
			<Popover
				id={basketLinkId}
				open={openBaksetLink}
				onClose={handleCloseBaksetPopover}
				anchorEl={anchorBasketLink}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				{" "}
				SETTING
			</Popover>
		</StyledBasket>
	);
};

export default BasketPopover;
