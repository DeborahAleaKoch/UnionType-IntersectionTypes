// IntersectionType-Level-1_2

import { Alcohol, Mixer, Cocktail } from "./alcohol";

//Schreibe ein Funktion mixCocktail mit zwei Parametern
//Rückgabewert ist vom Intersection-Type Cocktail

function mixCocktail(alcohol: Alcohol, mixer: Mixer): Cocktail {
	//das zurückgegebene Objekt soll die Eigenschaften vom übergebenen alcohol und mixer enthalten
	const newCocktail: Cocktail = {
		name: `${alcohol.name} ${mixer.name}`,
		type: "Longdrink",
		percentage: alcohol.percentage,
		carbonated: mixer.carbonated,
	};
	console.log(newCocktail);

	return newCocktail;
}

const gin: Alcohol = {
	name: "gin",
	type: "hochprozentiges",
	percentage: 40,
};
const tonic: Mixer = {
	name: "tonic",
	type: "limo",
	carbonated: true,
};

mixCocktail(gin, tonic);
