import { Box, styled } from "@mui/material";

import displayFlexCentered from "@/theme/displays";
import useTransition from "@/theme/hooks/useTransition";

export const StyledLoginPopover = styled(Box)(({ theme }) => ({
	".login_button": {
		[theme.breakpoints.down("tabletM")]: {
			width: "60px",
		},
		".login_link": {
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
}));
