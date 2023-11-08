import React, { FC } from "react";

import CustomLink from "@/components/UI/CustomLink";

import { StyledAdmin } from "./styles";
import { AdminIcon } from "@/icons";

const Admin: FC = () => {
	return (
		<StyledAdmin>
			<CustomLink href="/admin">
				<AdminIcon />
			</CustomLink>
		</StyledAdmin>
	);
};

export default Admin;
