import { Box as StyledBox, styled } from "@mui/material";

import displayFlexCentered from "@/theme/displays";

export const StyledThemeSwitcher = styled(StyledBox)(({ theme }) => ({
	...displayFlexCentered,
	width: "85px",
	height: "85px",
	fontSize: "25px",

	borderLeft: `1px solid ${theme.palette.primary.contrastText}`,
	cursor: "pointer",
	transition: `${theme.transitions.duration.short}${theme.transitions.easing.easeInOut}`,
	"&:hover": {
		color: theme.palette.primary.main,
	},
	[theme.breakpoints.down("tabletM")]: {
		width: "60px",
	},
	[theme.breakpoints.down("mobile")]: {
		display: "none",
		opacity: 0,
		visibility: "hidden",
	},
}));
