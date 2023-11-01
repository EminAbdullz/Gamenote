import { Box, styled } from "@mui/material";

import displayFlexCentered from "@/theme/displays";
import useTransition from "@/theme/hooks/useTransition";

export const StyledSearchPopover = styled(Box)(({ theme }) => ({
	display: "none",
	opacity: 0,
	visibility: "hidden",
	[theme.breakpoints.down("tabletL")]: {
		display: "flex",
		opacity: 1,
		visibility: "visible",
		".searching_button": {
			".searching_link": {
				width: "85px",
				height: `85px`,
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
		},
	},
	[theme.breakpoints.down("tabletM")]: {
		display: "none",
		opacity: 0,
		visibility: "hidden",
	},
}));
