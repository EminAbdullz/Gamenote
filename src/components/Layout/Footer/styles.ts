import { Box, styled } from "@mui/material";

export const StyledFooter = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.dark,
	color: theme.palette.primary.contrastText,
	padding: "15px",
}));
