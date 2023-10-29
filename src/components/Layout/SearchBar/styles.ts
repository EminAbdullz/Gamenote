import { Box, styled } from "@mui/material";

export const StyledSearchBar = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	padding: "15px",
}));
