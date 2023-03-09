import React from "react";
import { MainContent, Container, Header } from "../../components";

export function Home() {
	return (
		<div className="w-[100vw] flex flex-col justify-center items-center">
			<Container>
				<Header />
				<MainContent />
			</Container>
		</div>
	);
}

export default Home;
