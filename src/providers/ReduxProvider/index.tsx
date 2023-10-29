"use client";

import { Provider } from "react-redux";

import { TypeChildren } from "@/shared/types/children";

import store from "@/redux/store/store";

export default function ReduxProvider({ children }: TypeChildren) {
	return <Provider store={store}>{children}</Provider>;
}
