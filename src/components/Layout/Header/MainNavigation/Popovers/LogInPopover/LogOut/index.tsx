import { Button, Theme, useTheme } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

import { IUser } from "@/shared/interfaces/user";

import { tokenReader } from "@/utils/tokenReader";

import { StyledLogOut } from "./styles";
import { useActions } from "@/redux/hooks/useActions";
import { useAppSelector } from "@/redux/hooks/useAppSelector";

const LogOut: React.FC = () => {
	const router = useRouter();

	const { t } = useTranslation();

	const token: string = useAppSelector(
		(state) => state?.rootReducer?.token?.token
	);

	const { removeToken } = useActions();

	const user: IUser = tokenReader(token) as IUser;

	const theme: Theme = useTheme();

	//! token time check

	const tokenExp = moment(user?.tokenExpDate).format("LT");
	const tokenIat = moment(user?.tokenIatDate).format("LT");

	const onHandleSignOut = () => {
		Swal.fire({
			title: t("signOut") as string,
			showCancelButton: true,
			confirmButtonColor: theme?.palette?.error?.dark,
			cancelButtonColor: theme?.palette?.primary?.main,
			confirmButtonText: t("yes") as string,
			cancelButtonText: t("no") as string,
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("", "", "success");

				removeToken();
				setTimeout(() => router.push("/"), 150);
			}
		});
	};

	return (
		<StyledLogOut>
			{user?.name}

			{user?.surname}
			<Button onClick={onHandleSignOut}>{t("logOut")}</Button>
		</StyledLogOut>
	);
};

export default LogOut;
