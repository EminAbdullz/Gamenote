import { themeActions } from "./slices/theme";
import { tokenActions } from "./slices/token";

const rootActions = {
	...themeActions,
	...tokenActions,
};

export default rootActions;
