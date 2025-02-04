// Erstelle dort zwei Types, Alcohol und Mixer, die jeweils Eigenschaften für alkoholische Getränke und Mischgetränke definieren.

//Alcohol hat die Eigenschaften: name, percentage und type

type Alcohol = {
	name: string;
	percentage: number;
	type: string;
};

// Mixer hat die Eigenschaften: name, type und carbonated
type Mixer = {
	name: string;
	type: string;
	carbonated: boolean;
};

//Lege anschließend einen Intersection-Typ namens Cocktail an, der sowohl die Eigenschaften von Alcohol als auch von Mixer enthält.

type Coctail = Alcohol & Mixer;

//Erstelle ein Objekt vom Typ Cocktail und weise ihm entsprechende Eigenschaften zu.

const ginTonic: Coctail = {
	name: "ginTonic",
	percentage: 40,
	type: "hochprozentiges",
	carbonated: true,
};

// Gib die Eigenschaften des Cocktails auf der Konsole aus, um sicherzustellen, dass der Typ korrekt erstellt wurde.

console.log(ginTonic);
