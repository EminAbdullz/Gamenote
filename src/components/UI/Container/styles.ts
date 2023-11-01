import { Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
	padding: "10px",
}));
