import React, { useState } from "react";
import AddItem from "../../components/SVG/AddItem";
import Container from "../../components/Container";
import ListOfPost from "../../components/ListOfPost";
import Post from "../Post";
import useFetch from "../../hooks/useFetch";
import ModalAdd from "../../components/modalAdd";
import useModal from "../../hooks/useModal";

export const MainContent = () => {
	const {
		setData: setBlogs,
		data: posts,
		isPending,
		error,
	} = useFetch("https://jsonplaceholder.typicode.com/posts");

	const modalAdd = useModal();

	console.log(posts);
	return (
		<main className="Main flex flex-col justify-between items-center">
			<Container>
				<div className=" w-full flex justify-between items-center mb-6">
					<h2 className=" text-xl font-bold">List of post</h2>
					<div>
						<button type="submit" onClick={modalAdd.openModal}>
							<AddItem />
						</button>
						<ModalAdd
							isOpen={modalAdd.isOpen}
							closeModal={modalAdd.closeModal}
						/>
					</div>
				</div>
				<ListOfPost>
					{error && <div> {error} </div>}
					{isPending && <div> Loading ...</div>}
					{posts &&
						posts.map((post) => {
							return (
								<Post
									key={post.id}
									Name={post.title}
									PostText={post.body}
									id={post.id}
								/>
							);
						})}
				</ListOfPost>
			</Container>
		</main>
	);
};

export default MainContent;
