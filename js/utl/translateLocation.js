const translateLocation = (inputValue) => {
	inputValue = inputValue.toLowerCase();
	inputValue = inputValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	const cities = {
		saoPaulo: {
			state: "sp",
			city: "sao-paulo",
			cityRender: "São Paulo - SP",
		},
		rioDeJaneiro: {
			state: "rj",
			city: "rio-de-janeiro",
			cityRender: "Rio de Janeiro - RJ",
		},
	};
	if (inputValue === "sp" || inputValue === "sao paulo") {
		return cities.saoPaulo;
	}
	if (
		inputValue === "rj" ||
		inputValue === "rio de janeiro" ||
		inputValue === "rio"
	) {
		return cities.rioDeJaneiro;
	}
	return "";
};

export default translateLocation;
