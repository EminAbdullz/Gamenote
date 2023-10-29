import { Box, styled } from "@mui/material";

import displayFlexCentered from "@/theme/displays";
import useTransition from "@/theme/hooks/useTransition";

export const StyledSecondaryNavigation = styled(Box)(({ theme }) => ({
	display: "none",
	opacity: 0,
	visibility: "hidden",

	[theme.breakpoints.down("tabletM")]: {
		display: "flex",
		opacity: 1,
		visibility: "visible",
		height: "85px",
		".burger_menu_link": {
			heigth: "85px",
			width: "85px",
			...displayFlexCentered,
			fontSize: "25px",
			color: "inherit",
			borderLeft: `0.5px solid ${theme.palette.primary.contrastText}`,
			transition: useTransition(),
			"&:hover": {
				color: theme.palette.primary.main,
			},
			[theme.breakpoints.down("mobile")]: {
				width: "65px",
			},
		},
		".home_link": {
			...displayFlexCentered,
			fontSize: "25px",
			color: "inherit",
			width: "85px",
			heigth: `85px`,
			borderLeft: `0.5px solid ${theme.palette.primary.contrastText}`,
			borderRight: `0.5px solid ${theme.palette.primary.contrastText}`,
			transition: useTransition(),
			"&:hover": {
				color: theme.palette.primary.main,
			},
			[theme.breakpoints.down("mobile")]: {
				width: "65px",
			},
		},
	},
}));
