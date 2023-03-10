import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import MiniCard from "../miniCard";
import Modal from "../modal";
import { Endpoints } from "../../data";
import { useFetch } from "../../hooks";

export default function ModalEdit({
	isOpen,
	closeModal,
	modalId,
	post,
	image,
	handelEdit,
}) {
	const [formData, setFormData] = useState({ post: post, image: image });
	const { fetchData, response, error, setError, loading } = useFetch(
		Endpoints.posts.updatePost(modalId),
		{
			method: "PUT",
			headers: {
				// Authorization: `Bearer ${getData("user")}`,
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjQwOWM4ZDdjMDM0YmEyMWJmODFjZTczIn0sImV4cCI6MTY4MDk4MTU3OCwiaWF0IjoxNjc4Mzg5NTc4fQ.L__A_37aOfQ49A5poEJTDd2yy6d9rVZyHQRxqL4rDpQ`,
			},
			body: JSON.stringify({ text: formData.post, image: formData.image }),
		}
	);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.post.trim()) {
			setError("Fields can't be empty!");
			return;
		}
		fetchData();
		if (!loading) {
			closeModal();
			handelEdit();
		}
	};

	console.log(post);
	console.log(response);
	console.log(error);
	return (
		<>
			<Modal isOpen={isOpen} closeModal={closeModal}>
				<div>
					<h3 className="text-lg font-bold mb-4">Edit Post</h3>
				</div>
				<div className="mb-8">
					<MiniCard className="!py-2 mb-3 hover:border-blue border-none">
						<div className="flex justify-between items-start flex-row-reverse">
							<form onSubmit={handleSubmit}>
								{/* <Input type="text" name="post"  /> */}
								<textarea
									type="text"
									className="w-full h-28 border py-2 px-3 border-gray-600 rounded"
									name="post"
									// value={formData.post}
									onChange={(e) =>
										setFormData({ ...formData, post: e.target.value })
									}
								/>
								<Input
									type="file"
									name="image"
									value={formData.image}
									handleChange={handleChange}
								/>
								{/* <label>
									<p>Upload your image</p>
									<p>Drage and drop or browse to choose a file</p>
									<input className="hidden" type="file" />
								</label> */}
								<div className="flex gap-2 justify-between">
									<Button
										className="w-full bg-white border text-black"
										type="button"
										onClick={closeModal}
									>
										Cancel
									</Button>
									<Button className="w-full" type="submit">
										{loading ? "Loading..." : "Edit"}
									</Button>
								</div>
								<div className="text-center text-red-700 text-xs">
									{error && error}
								</div>
							</form>
						</div>
					</MiniCard>
				</div>
			</Modal>
		</>
	);
}
