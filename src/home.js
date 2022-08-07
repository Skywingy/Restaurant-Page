import { content, createHtmlElement } from "./index";

function render() {
const main = document.createElement("main");

const bienvenidos = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Ichiraku"
);
const title = createHtmlElement("h1", null, ["white"], "Ramen");

const hr = document.createElement("hr");
const subtitle = createHtmlElement(
    "p",
    null,
    ["text-center", "white"],
    "Rāmen Ichiraku, literally meaning: Ramen is the Best Pleasure"
);
const button = createHtmlElement("button", null, null, "Menu");

main.appendChild(bienvenidos);
main.appendChild(title);
main.appendChild(hr);
main.appendChild(subtitle);
main.appendChild(button);

content.appendChild(main);
}

export { render as renderHome };