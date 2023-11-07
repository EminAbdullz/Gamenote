import { useEffect, useState } from "react";

import { useAppSelector } from "@/redux/hooks/useAppSelector";

const useCheckCurrentToken = (): string => {
	const token: string = useAppSelector(
		(state) => state?.rootReducer?.token?.token
	);
	const [clientSideToken, setClientSideToken] = useState<string>("");

	useEffect(() => {
		setClientSideToken(token);
	}, [token]);

	return clientSideToken;
};

export default useCheckCurrentToken;
