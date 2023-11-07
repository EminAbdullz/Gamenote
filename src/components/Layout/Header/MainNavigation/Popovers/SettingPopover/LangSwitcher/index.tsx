"use client";

import { Box, Checkbox, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { StyledContainerForWrappers } from "./styles";
import i18n from "@/i18n";

const LangSwitcher = () => {
	//! Language logic

	const language = {
		russian: "Русский",
		english: "English",
	};

	const [currentLang, setCurrentLang] = useState<"" | "ru" | "en">("");
	const [currentEn, setCurrentEn] = useState<boolean>(false);
	const [currentRu, setCurrentRu] = useState<boolean>(false);

	useEffect(() => {
		if (!currentLang) {
			i18n.changeLanguage("en");
			setCurrentEn(true);

			return;
		}

		if (currentLang === "en") {
			i18n.changeLanguage("en");
			setCurrentEn(true);
			setCurrentRu(false);

			return;
		}

		if (currentLang === "ru") {
			i18n.changeLanguage("ru");
			setCurrentEn(false);
			setCurrentRu(true);
		}
	}, [currentLang]);

	return (
		<StyledContainerForWrappers
			component={"div"}
			className="container_for_wrappers"
		>
			<Box component={"div"} className="checkbox_wrapper">
				<Checkbox checked={currentEn} />
				<Typography component={"p"} onClick={() => setCurrentLang("en")}>
					{language?.english}
				</Typography>
			</Box>

			<Box component={"div"} className="checkbox_wrapper">
				<Checkbox checked={currentRu} />
				<Typography component={"p"} onClick={() => setCurrentLang("ru")}>
					{language?.russian}
				</Typography>
			</Box>
		</StyledContainerForWrappers>
	);
};

export default LangSwitcher;
