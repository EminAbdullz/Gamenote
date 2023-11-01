import { Box, styled } from "@mui/material";

import displayFlexCentered from "@/theme/displays";
import useTransition from "@/theme/hooks/useTransition";

export const StyledBasket = styled(Box)(({ theme }) => ({
	".basket_button": {
		[theme.breakpoints.down("tabletM")]: {
			width: "60px",
		},
		".basket_link": {
			...displayFlexCentered,
		},
		...displayFlexCentered,
		fontSize: "25px",
		color: "inherit",
		backgroundColor: "inherit",
		width: "85px",
		height: `85px`,
		borderLeft: `0.5px solid ${theme.palette.primary.contrastText}`,
		borderRadius: "0px",
		transition: useTransition(),
		"&:hover": {
			color: theme.palette.primary.main,
		},
		".basket_icon_wrapper": {
			width: "85px",
			height: "85px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "relative",
			" .basket_length": {
				width: "25px",
				length: "20px",
				borderRadius: theme.shape.borderRadius,
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.grey[100],
				fontSize: "13px",
				fontWeight: "bold",
				border: "none",
				position: "absolute",
				right: 15,
				top: 8,
			},
		},
	},
}));
