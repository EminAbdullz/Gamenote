import axios, { AxiosInstance } from "axios";

import { BASE_URL } from "./url.config";

const axiosClassic: AxiosInstance = axios.create({
	baseURL: BASE_URL ? BASE_URL : "",
});

export { axiosClassic };
