import Link from "next/link";
import React, { FC } from "react";

import { TypeCustomLink } from "./types";

const CustomLink: FC<TypeCustomLink> = ({ children, className, href }) => {
	return (
		<Link
			className={className}
			href={href || ""}
			style={{ color: "inherit", textDecoration: "none" }}
		>
			{children}
		</Link>
	);
};

export default CustomLink;
