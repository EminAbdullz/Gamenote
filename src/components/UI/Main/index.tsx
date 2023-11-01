"use client";

import React, { FC } from "react";

import { TypeChildren } from "@/shared/types/children";

import { StyledMain } from "./styles";

const Main: FC<TypeChildren> = ({ children }) => {
	return <StyledMain>{children}</StyledMain>;
};

export default Main;
