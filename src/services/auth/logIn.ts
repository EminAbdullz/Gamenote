import { AxiosError } from "axios";

import { axiosClassic } from "@/config/axiosClassic";
import { LOGIN_URL } from "@/config/url.config";

export const logInService = async (
	userData: FormData
): Promise<{ token: string; error?: AxiosError }> => {
	const url = LOGIN_URL ? LOGIN_URL : "";

	try {
		const response = await axiosClassic.post<{ token: string }>(url, userData);
		return response?.data;
	} catch (error: AxiosError | unknown) {
		console.log(error);

		return {
			token: "",
			error: error as AxiosError,
		};
	}
};
