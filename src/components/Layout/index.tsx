"use client";

import { Container } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

import { TypeChildren } from "@/shared/types/children";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
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

			<Container className="content-container" maxWidth="laptopL">
				{children}
			</Container>

			{/* <Main>Main</Main> */}
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
