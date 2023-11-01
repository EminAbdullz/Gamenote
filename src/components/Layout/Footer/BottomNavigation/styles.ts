import { Box, styled } from "@mui/material";

import displayFlexCentered from "@/theme/displays";

export const StyledBottomNavigation = styled(Box)(({ theme }) => ({
	...displayFlexCentered,
	justifyContent: "space-between",
	marginTop: "30px",
}));
