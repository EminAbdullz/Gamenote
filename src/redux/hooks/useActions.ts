import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import rootActions from "@/redux/store/features/root.actions";
import { AppDispatch } from "@/redux/store/store";

export const useActions = () => {
	const dispatch: AppDispatch = useDispatch();

	return useMemo(() => {
		return bindActionCreators(rootActions, dispatch);
	}, [rootActions, dispatch]);
};

