import { Box, styled } from "@mui/material";

import displayFlexCentered from "@/theme/displays";
import useTransition from "@/theme/hooks/useTransition";

export const StyledFooter = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.dark,
	color: theme.palette.primary.contrastText,
	padding: "15px",
	width: "100%",
	".logo_and_links_container": {
		...displayFlexCentered,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: "70px",
		paddingBottom: "30px",

		".social_media_links_container": {
			...displayFlexCentered,
			flexDirection: "row",
			gap: "10px",
			".icon_link": {
				padding: "12px",
				borderRadius: "50%",
				color: "inherit",
				backgroundColor: theme.palette.primary.main,
				fontSize: "13px",
				transition: useTransition(),
				"&:hover": {
					transform: "scale(1.2)",
				},
			},
		},
	},
}));
