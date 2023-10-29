import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TypeChildren } from "@/shared/types/children";

import ReactQueryProvider from "../ReactQueryProvider";
import ReduxProvider from "../ReduxProvider";
import ThemeProvider from "../ThemeProvider";

export default function MainProvider({ children }: TypeChildren) {
	return (
		<ReduxProvider>
			<ReactQueryProvider>
				<ThemeProvider>
					<ToastContainer />
					{children}
				</ThemeProvider>
			</ReactQueryProvider>
		</ReduxProvider>
	);
}
