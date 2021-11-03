const FetchApi = async ({ city, state }) => {
	try {
		const data = await fetch(
			`https://private-9e061d-piweb.apiary-mock.com/venda?state=${state}&city=${city}`,
			{
				method: "Get",
			}
		);
		const json = await data.json();
		return json.search;
	} catch (error) {
		console.log(error);
	}
};

export default FetchApi;
