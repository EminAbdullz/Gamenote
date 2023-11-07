export interface IUser {
	name: string;
	surname: string;
	email: string;
	login: string;
	phone: string;
	isAdmin: boolean;
	isBlocked: boolean;
	birthDate: string;
	role?: string;
	id: number;
	tokenExpDate?: Date;
	tokenIatDate?: Date;
}
