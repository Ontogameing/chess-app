import "./style.css";
import { homePage } from "./pages/home";
import { localPage } from "./pages/local";
import { setupLocalPage } from "./pages/local";
import { onlinePage } from "./pages/online";
// import { setupOnlinePage } from "./pages/local";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = homePage();

const path = window.location.pathname;

if (path === "/play/local") {
	app.innerHTML = localPage();

	setupLocalPage();
} else if (path === "/play/online") {
	app.innerHTML = onlinePage();
} else app.innerHTML = homePage();
