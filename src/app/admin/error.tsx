"use client";

import { Typography } from "@mui/material";

export default function ErrorHomePage({ error }: { error: Error }) {
	return <Typography>...Oops! {error?.message}</Typography>;
}
