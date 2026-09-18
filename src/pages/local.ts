import { boardState } from "../chess/pieces";

export function localPage(): string {
	return `
	<h1 class="center">LOCAL CHESS</h1>
	<div id="board"></div>
	`;
}

export function setupLocalPage() {
	const board = document.querySelector<HTMLDivElement>("#board")!;
	const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

	const pieceSymbols = {
		white: {
			pawn: "♙",
			knight: "♘",
			bishop: "♗",
			rook: "♖",
			queen: "♕",
			king: "♔",
		},
		black: {
			pawn: "♟",
			knight: "♞",
			bishop: "♝",
			rook: "♜",
			queen: "♛",
			king: "♚",
		},
	};

	for (let i = 0; i < 64; i++) {
		const row = Math.floor(i / 8);
		const collumn = i % 8;

		const square = document.createElement("div");
		square.classList.add("square");

		if ((row + collumn) % 2 === 0) {
			square.classList.add("light");
		} else {
			square.classList.add("dark");
		}

		const file = files[collumn];
		const rank = 8 - row;
		const coordinate = `${file}${rank}`;

		square.dataset.square = coordinate;

		const piece = boardState.get(coordinate);

		if (piece) {
			square.textContent = pieceSymbols[piece.color][piece.type];
		}

		square.addEventListener("click", () => {
			console.log(piece);
		});

		board.appendChild(square);
	}
}
