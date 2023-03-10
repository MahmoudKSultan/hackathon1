import React, { useEffect, useState } from "react";
import AddItem from "../../components/SVG/AddItem";
import Container from "../../components/Container";
import ListOfPost from "../../components/ListOfPost";
import Post from "../Post";
import { useFetch, useModal, useLocalStorage } from "../../hooks";
import ModalAdd from "../../components/modalAdd";
import { Endpoints } from "./../../data";

export const MainContent = () => {
	const [posts, setPosts] = useState([]);
	const modalAdd = useModal();
	const { getData } = useLocalStorage();
	const { fetchData, response, error, setError, loading } = useFetch(
		Endpoints.posts.getAllPosts(0, 30),
		{
			method: "GET",
			headers: {
				// Authorization: `Bearer ${getData("user")}`,
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjQwOWM4ZDdjMDM0YmEyMWJmODFjZTczIn0sImV4cCI6MTY4MDk4MTU3OCwiaWF0IjoxNjc4Mzg5NTc4fQ.L__A_37aOfQ49A5poEJTDd2yy6d9rVZyHQRxqL4rDpQ`,
			},
		}
	);
	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		if (response) setPosts(response.data.posts);
	});

	function handleEditPost(id, data) {
		let myPosts = [...posts];
		const postIndex = posts.findIndex((p) => p._id == id);
		myPosts[postIndex].text = data;
		setPosts(() => myPosts);
	}
	function handleDeletePost(id) {
		let myPosts = posts.filter((p) => p._id != id);
		console.log(myPosts);
		setPosts(myPosts);
	}

	return (
		<main className="Main flex flex-col justify-between items-center">
			<Container>
				<div className=" w-full flex justify-between items-center mb-6">
					<h2 className=" text-xl font-bold">List of post</h2>
					<div>
						<button onClick={modalAdd.openModal}>
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
					{loading && <div> Loading ...</div>}
					{posts &&
						posts.map((post) => {
							return (
								<Post
									key={post._id}
									Name={post.user.name}
									PostText={post.text}
									PostImage={post.image}
									id={post._id}
									handleEditPost={() => handleEditPost(post._id)}
									handleDeletePost={() => handleDeletePost(post._id)}
								/>
							);
						})}
				</ListOfPost>
			</Container>
		</main>
	);
};

export default MainContent;
