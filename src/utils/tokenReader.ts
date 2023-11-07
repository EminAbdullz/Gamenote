import { IUser } from "@/shared/interfaces/user";

export const tokenReader = (token: string): IUser | null => {
	let decodedToken: any = "";

	if (!token.length) return null;

	if (typeof window !== "undefined") {
		decodedToken = JSON.parse(atob(token.split(".")[1]));
	}

	const dateParts = decodedToken?.birthDate?.split(" ");
	const date = new Date(dateParts[0]);
	const formattedDate = date.toLocaleDateString();

	// Extract the token's expiration date (exp) and convert it to a Date object
	const expirationTimestamp = decodedToken?.exp
		? Number(decodedToken.exp) * 1000
		: 0;
	const expirationDate = new Date(expirationTimestamp);

	// Extract the token's issued at date (iat) and convert it to a Date object
	const issuedAtTimestamp = decodedToken?.iat
		? Number(decodedToken.iat) * 1000
		: 0;
	const issuedAtDate = new Date(issuedAtTimestamp);

	return {
		name: decodedToken?.name,
		surname: decodedToken?.surname,
		email: decodedToken?.email,
		login: decodedToken?.login,
		phone: decodedToken?.phone,
		isAdmin: Boolean(decodedToken?.isAdmin),
		isBlocked: Boolean(decodedToken?.isBlocked),
		birthDate: formattedDate,
		role: decodedToken?.role,
		id: +decodedToken?.id,
		tokenExpDate: expirationDate,
		tokenIatDate: issuedAtDate,
	};
};
