export const amenitiesTranslator = (item) => {
	const tagsTranslator = [];
	tagsTranslator["PETS_ALLOWED"] = "Aceita animais";
	tagsTranslator["ELEVATOR"] = "Elevador";
	tagsTranslator["ELECTRONIC_GATE"] = "Portão eletrônico";
	tagsTranslator["CINEMA"] = "Cinema";
	tagsTranslator["GYM"] = "Academia";
	tagsTranslator["PLAYGROUND"] = "Playground";
	tagsTranslator["GATED_COMMUNITY"] = "Condomínio";
	tagsTranslator["SAUNA"] = "	Sauna";
	tagsTranslator["GARDEN"] = "Jardim";
	tagsTranslator["PARTY_HALL"] = "Salão de Festas";
	tagsTranslator["FURNISHED"] = "Mobiliádo";
	tagsTranslator["FIREPLACE"] = "Lareira";
	tagsTranslator["POOL"] = "Piscina";
	tagsTranslator["BICYCLES_PLACE"] = "Bicicletário";
	tagsTranslator["AIR_CONDITIONING"] = "Ar Condicionado";
	tagsTranslator["SPORTS_COURT"] = "Quadra poli-esportiva";
	tagsTranslator["AMERICAN_KITCHEN"] = "Cozinha americana";
	tagsTranslator["TENNIS_COURT"] = "Quadra de tênis";
	tagsTranslator["LAUNDRY"] = "Lavanderia";
	tagsTranslator["BARBECUE_GRILL"] = "Churrasqueira";

	return tagsTranslator[item];
};
