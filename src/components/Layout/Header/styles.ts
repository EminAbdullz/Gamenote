import { Box, styled } from "@mui/material";

export const StyledHeader = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.dark,
	color: theme.palette.primary.contrastText,
	height: "85px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	".hidden_logo": {
		[theme.breakpoints.down("tabletM")]: {
			display: "none",
			opacity: 0,
			visibility: "hidden",
		},
	},
}));
