const FetchApi = async (context = "state=sp&city=sao-paulo") => {
	try {
		const data = await fetch(
			`https://private-9e061d-piweb.apiary-mock.com/venda?${context}`,
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
