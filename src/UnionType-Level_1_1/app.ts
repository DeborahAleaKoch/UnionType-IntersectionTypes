// Erstelle dort einen Union Type namens Result mit den Werten "success", "error" und "pending"
type Result = "success" | "error" | "pending";

const result: Result = "error";

function handleResult(entry: Result) {
	switch (entry) {
		case "success":
			console.log("success");
			break;

		case "error":
			console.log("error");
			break;

		case "pending":
			console.log("pending");
			break;
		default:
			console.log("unkown result");
			break;
	}
}
handleResult("error");
handleResult("success");
handleResult("pending");
