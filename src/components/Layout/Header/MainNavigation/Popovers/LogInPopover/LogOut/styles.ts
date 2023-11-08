import { Box, styled } from "@mui/material";

import displayFlexCentered from "@/theme/displays";

export const StyledLogOut = styled(Box)(({ theme }) => ({
	...displayFlexCentered,
	flexDirection: "column",
	border: `1px solid ${theme.palette.primary.contrastText}`,
	width: "200px",
	padding: "15px",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.primary.dark,
	".link": {
		underline: "none",
		outline: "none",
		border: "none",
		fontSize: "20px",
		color: theme.palette.primary.main,
	},
}));
