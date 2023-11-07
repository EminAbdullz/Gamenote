import { Box, Popover, styled } from "@mui/material";

import displayFlexCentered from "@/theme/displays";
import useTransition from "@/theme/hooks/useTransition";

export const StyledSetting = styled(Box)(({ theme }) => ({
	".setting_button": {
		width: "85px",
		height: "85px",
		".setting_link": {
			...displayFlexCentered,
			transition: useTransition(),
		},
		...displayFlexCentered,
		fontSize: "25px",
		color: "inherit",
		backgroundColor: "inherit",
		borderLeft: `0.5px solid ${theme.palette.primary.contrastText}`,
		borderRadius: "0px",
		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
	[theme.breakpoints.down("tabletL")]: {
		display: "none",
		opacity: 0,
		visibility: "hidden",
	},
}));

