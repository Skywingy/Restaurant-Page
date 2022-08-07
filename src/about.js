import { content, createHtmlElement } from "./index";

function render() {
const main = document.createElement("main");
main.classList.add("main");

const bienvenidos = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Ichiraku"
);
const title = createHtmlElement("h1", null, ["gray"], "Over the years");

const hr = document.createElement("hr");

const contenty =
    "Ramen Ichiraku was founded by Teuchi thirty-four years before the start of Part II. Although it is quite small and has an unassuming appearance, Ramen Ichiraku has always been popular with Konoha's villagers because of Teuchi's strong commitment to taste, giving the ramen an almost artistic quality. Like any ramen establishment, Ramen Ichiraku offers various toppings, such as char siu and boiled eggs. In Konoha Hiden, seaweed had been the most popular topping for several years until, after the Fourth Shinobi World War, it was surpassed by naruto.";
const p = createHtmlElement("p", null, ["menu-item"], contenty);

  main.appendChild(bienvenidos);
  main.appendChild(title);
  main.appendChild(hr);
  main.appendChild(p);

  content.appendChild(main);
}

export { render as renderAbout };