import { Button, Stack, Theme, Typography, useTheme } from "@mui/material";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

import CustomLink from "@/components/UI/CustomLink";

import useCheckCurrentToken from "@/hooks/checkCurrentToken";

import { IUser } from "@/shared/interfaces/user";

import { tokenReader } from "@/utils/tokenReader";

import { StyledLogOut } from "./styles";
import { useActions } from "@/redux/hooks/useActions";

const LogOut: FC = () => {
	const { t } = useTranslation();
	const theme: Theme = useTheme();
	const router: AppRouterInstance = useRouter();

	const { removeToken, removeAdmin } = useActions();
	const token: string = useCheckCurrentToken();
	const user: IUser = tokenReader(token) as IUser;

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
				removeAdmin();

				setTimeout(() => {
					router.push("/");
					window.location.reload();
				}, 50);
			}
		});
	};

	return (
		<StyledLogOut>
			<CustomLink href="/profile">
				<Typography component={"h2"} className="link">
					{t("profile")}
				</Typography>
			</CustomLink>
			<Stack direction={"row"}>
				<Typography component={"p"}>
					{user?.name} {user?.surname}
				</Typography>
			</Stack>
			<Button onClick={onHandleSignOut}>{t("logOut")}</Button>
		</StyledLogOut>
	);
};

export default LogOut;
