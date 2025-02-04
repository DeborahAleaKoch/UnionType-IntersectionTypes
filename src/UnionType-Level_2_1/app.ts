// Erstelle folgende Datentypen (type)
type Circle = {
	shape: "circle";
	radius: number;
};

type Square = {
	shape: "square";
	sideLength: number;
};

type Triangle = {
	shape: "triangle";
	base: number;
	height: number;
};

type Rectangle = {
	shape: "rectangle";
	width: number;
	height: number;
};

// type Trapez = {
// 	shape: "trapez";
// 	height: number;
// 	base: number;
// 	top: number;
// };

type RandomShape = Circle | Square | Triangle | Rectangle | undefined;

//Schreibe eine Funktion calculateArea, die die Fläche berechnet

// Der Übergabeparameter soll ein UnionType von Circle, Square, Triangle,  Rectangle und undefined sein
function calculateArea(entry: RandomShape) {
	if (entry === undefined) {
		throw new Error("“No suitable shape found.”");
	}
	switch (entry.shape) {
		case "circle":
			return Math.PI * entry.radius ** 2;
		case "square":
			return entry.sideLength * entry.sideLength;
		case "triangle":
			return entry.base * entry.height * 0.5;
		case "rectangle":
			return entry.height * entry.width;
		default:
			throw new Error("we do not all possible shapes");
	}
}
