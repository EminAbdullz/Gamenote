import { Paper, styled } from "@mui/material";

export const StyledLayout = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.primary.light,
	"& .content-container": {
		// backgroundColor: "inherit",
		color: theme.palette.primary.contrastText,
		padding: "10px",
	},
}));
