import Link from "next/link";
import React, { FC } from "react";

import { INavigationLink } from "./types";

const CustumLink: FC<INavigationLink> = ({ children, href, className }) => {
	return (
		<Link href={href || ""} className={className}>
			{children}
		</Link>
	);
};

export default CustumLink;
