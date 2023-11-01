"use client";

import { usePathname } from "next/navigation";
import React, { FC } from "react";

import { TypeChildren } from "@/shared/types/children";

import CustomContainer from "../UI/Container";

import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { StyledLayout } from "./styles";

const Layout: FC<TypeChildren> = ({ children }) => {
	const pathname = usePathname();

	return (
		<StyledLayout>
			{pathname === "/registration" ? null : (
				<>
					<Header />
					<SearchBar />
				</>
			)}

			<CustomContainer>{children}</CustomContainer>
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
