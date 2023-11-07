import { Box, styled } from "@mui/material";

import displayFlexCentered from "@/theme/displays";
import useTransition from "@/theme/hooks/useTransition";

export const StyledNavigation = styled(Box)(({ theme }) => ({
	height: "85px",
	display: "flex",
	justifyContent: "flex-end",
	".favorite_link": {
		[theme.breakpoints.down("tabletM")]: {
			width: "60px",
		},
		...displayFlexCentered,
		fontSize: "25px",
		color: "inherit",
		width: "85px",
		heigth: `85px`,
		borderLeft: `0.5px solid ${theme.palette.primary.contrastText}`,
		transition: useTransition(),
		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
}));
