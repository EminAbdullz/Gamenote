import { Box } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

import { TypeClassname } from "@/shared/types/className";

import logo from "../../../../public/logo.png";

const Logo: FC<TypeClassname> = ({ className }) => {
	return (
		<Box component={"div"} className={className}>
			<Image src={logo} alt="LOGO" width={250} />
		</Box>
	);
};

export default Logo;
