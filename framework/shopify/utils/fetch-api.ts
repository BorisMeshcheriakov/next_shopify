const fetchApi = async ({ query }: { query: string }) => {
	const url = 'http://localhost:4000/graphql';

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query }),
	});

	const { data, errors } = await response.json();

	if (errors) {
		throw new Error(errors[0].message ?? errors.message);
	}
	return { data };
};

export default fetchApi;
