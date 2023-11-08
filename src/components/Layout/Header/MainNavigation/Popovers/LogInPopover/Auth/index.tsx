"use client";

import { Box, Button, InputAdornment } from "@mui/material";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { logInService } from "@/services/auth/logIn";

import { IUser } from "@/shared/interfaces/user";

import { tokenReader } from "@/utils/tokenReader";

import Input from "./Input";
import { StyledFormControl } from "./styles";
import { PasswordIcon, UserIcon } from "@/icons";
import { useActions } from "@/redux/hooks/useActions";
import { useAppSelector } from "@/redux/hooks/useAppSelector";

const Auth: React.FC = () => {
	const { t } = useTranslation();

	const [login, setLogin] = React.useState<string>("");
	const [password, setPassword] = React.useState<string>("");

	const { setToken, setAdmin } = useActions();

	const onHandleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
		e?.preventDefault();

		const formData = new FormData();

		formData.append("Login", login);
		formData.append("Password", password);

		if (!formData.get("Login") || !formData.get("Password")) {
			toast.error(t("wrongAuth"));
		}

		const token: { token: string; error?: AxiosError } = await logInService(
			formData
		);

		//! server err
		if (!token?.token && token?.error) {
			toast.error(token?.error?.message as string);

			return;
		}

		//! client err
		if (!token?.token || token?.error) {
			toast.error(token?.error?.response?.data as string);

			return;
		}

		if (token?.token && !token?.error) {
			setToken(token?.token);
			const currentUser: IUser = tokenReader(token?.token) as IUser;

			setAdmin(currentUser?.isAdmin);

			setLogin("");
			setPassword("");

			Swal.fire({
				text: `${t("sucsessAuth")}`,
				icon: "success",
				showConfirmButton: false,
				timer: 1500,
			});
		}
	};

	return (
		<StyledFormControl>
			<Box
				onSubmit={onHandleAuth}
				component={"form"}
				className="input_container"
			>
				<Input
					label={t("regLogin")}
					value={login}
					type="text"
					onChange={(
						e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
					) => {
						setLogin(e.target.value);
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<UserIcon className="input-icon" />
							</InputAdornment>
						),
					}}
				/>

				<Input
					label={t("regPassword")}
					value={password}
					type={"password"}
					onChange={(
						e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
					) => {
						setPassword(e.target.value);
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<PasswordIcon className="input-icon" />
							</InputAdornment>
						),
					}}
				/>
				<Button type="submit" className="submit_button">
					{t("login")}
				</Button>
			</Box>
		</StyledFormControl>
	);
};

export default Auth;
