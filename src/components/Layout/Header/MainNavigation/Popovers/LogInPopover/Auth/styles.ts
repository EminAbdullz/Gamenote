import { Box, styled } from "@mui/material";

import displayFlexCentered from "@/theme/displays";

export const StyledFormControl = styled(Box)(({ theme }) => ({
	padding: "10px",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.primary.dark,
	color: theme.palette.primary.contrastText,
	border: `1px solid ${theme.palette.primary.contrastText}`,
	".input_container": {
		...displayFlexCentered,
		flexDirection: "column",
		".submit_button": {
			width: "100%",
			height: "40px",
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
			fontSize: "15px",
		},
	},
}));
