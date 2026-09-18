type PieceColor = "white" | "black";
type PieceType = "pawn" | "knight" | "bishop" | "rook" | "queen" | "king";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

export interface Piece {
	type: PieceType;
	color: PieceColor;
}

export const boardState = new Map<string, Piece>();

for (const file of files) {
	boardState.set(`${file}7`, {
		type: "pawn",
		color: "black",
	});

	boardState.set(`${file}2`, {
		type: "pawn",
		color: "white",
	});
}

const backRow: PieceType[] = [
	"rook",
	"knight",
	"bishop",
	"queen",
	"king",
	"bishop",
	"knight",
	"rook",
];

for (let i = 0; i < 8; i++) {
	boardState.set(`${files[i]}8`, {
		type: backRow[i],
		color: "black",
	});

	boardState.set(`${files[i]}1`, {
		type: backRow[i],
		color: "white",
	});
}
