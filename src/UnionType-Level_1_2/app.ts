// Definiere dort einen Union Type namens NumericString, der entweder eine Zahl, einen String oder null darstellt.

type NumericString = number | string;

// Erstelle eine Variable vom Typ NumericString und weise ihr eine Zahl zu.

const numberString = 7;

// Schreibe eine Funktion isNumber, die einen Parameter vom Typ NumericString akzeptiert.

function isNumber(entry: NumericString) {
	//Implementiere isNumber, so dass sie überprüft, ob der übergebene Wert eine Zahl ist.
	switch (entry) {
		case "number":
			console.log("A Number", entry);
			break;
		case "string":
			console.log("ohhh, it is a string", entry);
			break;
	}
}

isNumber(7);
