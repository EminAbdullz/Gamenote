import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { StyledBottomNavigation } from "./styles";

const BottomNavigation: FC = () => {
	const { t } = useTranslation();

	return (
		<StyledBottomNavigation component={"nav"}>
			<Stack className="main_nav">
				<Typography component={"p"}>{t("country")}</Typography>
			</Stack>
		</StyledBottomNavigation>
	);
};

export default BottomNavigation;
