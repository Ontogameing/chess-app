export function homePage(): string {
	return `
	<div id="navbar">
		<a class="button-nav" href="index.html">Chess</a>
		<a class="button-nav" href="index.html">Play</a>
		<a class="button-nav" href="index.html">Puzzles</a>
		<a class="button-nav" href="index.html">Learn</a>
		<a class="button-nav" href="index.html">Sign In</a>
	</div>

	<h1 class="center">HOMEPAGE</h1>

	<div class="play-buttons">
		<a class="center button" id="online" href="/play/online">Play Online</a>
		<a class="center button" id="local" href="/play/local">Play Local</a>
	</div>

	<br />

	<div id="recents">
		<h2>Recent Games</h2>
		<label for="recents">Nothing yet :(</label>
	</div>`;
}
