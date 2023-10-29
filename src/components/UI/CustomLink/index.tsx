import { Icon } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

import { TypeCustomLink } from "./types";

const CustomLink: FC<TypeCustomLink> = ({ children, className, href }) => {
	return (
		<Link className={className} href={href || ""}>
			{<Icon>{children}</Icon>}
		</Link>
	);
};

export default CustomLink;
