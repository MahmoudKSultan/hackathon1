import React from "react";
import Logo from "../../components/SVG/Logo";
import Person from "../../components/SVG/Person";
import Input from "../Input";
import Search from "../SVG/Search";

export const Header = () => {
	return (
		<header className="Header flex justify-between w-full h-36">
			<div className="Logo flex justify-center items-center">
				<Logo />
			</div>
			<div className="flex items-center justify-center">
				<Input
					inputClasses={"w-[550px]"}
					type={"text"}
					name={"Search"}
					placeholder={"Search"}
				>
					<Search />
				</Input>
			</div>
			<div className="flex justify-between items-center">
				<h2>Mohammed Tamous</h2>
				<Person />
			</div>
		</header>
	);
};

export default Header;
