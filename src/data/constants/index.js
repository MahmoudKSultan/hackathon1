const newAPI = "https://hakathon2023.onrender.com/api";
export const Endpoints = {
	authentication: {
		signin: "https://talentsvalleyhackaton.onrender.com/api/v1/user/login",
		signup: "https://talentsvalleyhackaton.onrender.com/api/v1/user/signup",
	},
	posts: {
		addNewPost: () => `${newAPI}/post/add`,
		updatePost: (id) => `${newAPI}/post/update/${id}`,
		deletePost: (id) => `${newAPI}/post/delete/${id}`,
		getPostDetails: (id) => `${newAPI}/post/details/${id}`,
		getAllPosts: (offset, limit) =>
			`${newAPI}/post/list?offset=${offset}&limit=${limit}`,
		sharePost: (id) => `${newAPI}/post/share/${id}`,
	},
};

export default Endpoints;
