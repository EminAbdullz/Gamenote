import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";

i18next.use(initReactI18next).init({
	lng: "en",
	fallbackLng: "en",
	debug: true,
	resources: {
		en: {
			translation: enTranslation,
		},
		ru: {
			translation: ruTranslation,
		},
	},
	ns: ["translation"],
	interpolation: {
		escapeValue: false,
	},
});

export default i18next;
