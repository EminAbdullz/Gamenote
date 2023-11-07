import { Box } from "@mui/material";
import { styled } from "@mui/system";

import displayFlexCentered from "@/theme/displays";

export const StyledContainerForWrappers = styled(Box)(({ theme }) => ({
	...displayFlexCentered,
	border: `1px solid ${theme.palette.primary.contrastText}`,
	flexDirection: "column",
	alignItems: "flex-start",
	padding: "5px",
	backgroundColor: theme.palette.primary.dark,
	borderRadius: theme.shape.borderRadius,
	".checkbox_wrapper": {
		...displayFlexCentered,
	},
}));
