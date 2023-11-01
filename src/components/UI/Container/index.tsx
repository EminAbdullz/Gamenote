import React, { FC } from "react";

import { ICostumContainer } from "./interface";
import { StyledContainer } from "./styles";

const CustomContainer: FC<ICostumContainer> = ({ children, className }) => {
	return (
		<StyledContainer maxWidth="laptop" className={className}>
			{children}
		</StyledContainer>
	);
};

export default CustomContainer;
