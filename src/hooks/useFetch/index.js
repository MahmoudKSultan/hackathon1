import { useState } from "react";
export const useFetch = (url, options) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		try {
			const res = await fetch(url, {
				...options,
			});
			console.log(res);
			// if (res.r == 400) {
			// 	console.log(res);
			// 	// throw new Error(res.message);
			// }
			const data = await res.json();
			console.log(data);
			if (data.statusCode == 400) throw new Error(data.message);
			setResponse(data);
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
		setLoading(false);
	};

	return { fetchData, response, error, loading, setError };
};

export default useFetch;
