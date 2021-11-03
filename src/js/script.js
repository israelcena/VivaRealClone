// api call
import FetchApi from "./api/data.js";

// utils
import translateLocation from "./utl/translateLocation.js";

// DOM selectors
const countItens = document.querySelector("#count");
const location = document.querySelector("#location");
const cardsContainer = document.querySelector("#cards-container");
const btnGroup = document.querySelector("#buttonGroup");

// Listeners

// cardsContainer.addEventListener("mouseenter", () => {
// 	btnGroup.classList.toggle("opacity-0");
// });

// cardsContainer.addEventListener("mouseleave", () => {
// 	btnGroup.classList.toggle("opacity-0");
// });

location.addEventListener("change", (e) => {
	const location = e.target.value;
	const locationTranslated = translateLocation(location);
	FetchApi({
		city: locationTranslated.city,
		state: locationTranslated.state,
	}).then((data) => {
		let { totalCount } = data;
		countItens.innerHTML = `<h4>${totalCount} imóveis à venda em ${locationTranslated.cityRender} </h4>`;
		const itens = data.result.listings;

		console.log(itens);
		itens.forEach((element) => {
			var div = document.createElement("div");
			div.innerHTML = `
      	<div class="d-flex flex-column my-3">
						<div class="card card-item mb-2">
							<div class="row g-0">
								<div class="col-md-4">
									<img
										src="${element.medias[0].url}"
										class="img-fluid rounded-start"
										alt="..."
									/>
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<p class="card-text position-relative">
											<small class="text-muted">${element.listing.address.street}, ${
				element.listing.address.streetNumber
			} - ${element.listing.address.neighborhood}, ${
				element.listing.address.state
			} - ${element.listing.address.stateAcronym}</small>
										</p>
										<h5 class="card-title">${element.link.name}</h5>

										<ul class="d-flex">
											<li class="pe-3">
												<span class="property-card__detail-value fw-bolder"
													>${element.listing.usableAreas}</span
												>
												<span class="property-card__detail-text">m²</span>
											</li>
											<li class="property-card__detail-item pe-3">
												<span class="property-card__detail-value fw-bolder">
													${element.listing.bedrooms}
												</span>
												<span class="property-card__detail-text">
													Quartos
												</span>
											</li>
											<li class="property-card__detail-item pe-3">
												<span class="property-card__detail-value fw-bolder">
													${element.listing.bathrooms}
												</span>
												<span class="property-card__detail-text">
													Banheiros
												</span>
											</li>
											<li
												class="
													property-card__detail-item
													property-card__detail-garage
												"
											>
												<span class="property-card__detail-value fw-bolder">
													${element.listing.parkingSpaces}
												</span>
												<span class="property-card__detail-text">  ${
													element.listing.parkingSpaces > 1 ? "Vagas" : "Vaga"
												}</span>
											</li>
										</ul>

										<div class="py-1">

                    ${element.listing.amenities.map((amenity) => {
											return `<span class="badge rounded-pill bg-light text-secondary p-2">${amenity}</span>`;
										})}
							
										</div>

										<div class="mt-2">
											<h4>R$ ${element.listing.pricingInfos[0].price}</h4>
                      ${
												element.listing.pricingInfos[0].monthlyCondoFee
													? `<p class="card-text">
												Condomínio: <span class="fw-bolder"> R$ ${element.listing.pricingInfos[0].monthlyCondoFee}</span>
											</p>`
													: ``
											}
											
										</div>

										<div
											class="
												position-absolute
												bottom-0
												end-0
												opacity-0
												m-4
												pe-3
											"
											id="buttonGroup"
										>
											<button type="button" class="btn btn-card me-2">
												Telefone
											</button>
											<button type="button" class="btn btn-card">
												Enviar Mensagem
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
      `;
			cardsContainer.appendChild(div);
		});
	});
});
