import homeJS from "./home.js";
import menuJS from "./menu";
import contactJS from "./contact";
console.log("heyyyyyye");

homeJS();
menuJS();
contactJS();



const header = document.createElement("div");
header.innerText = "here";
header.classList.add("header");
document.getElementById("demo").appendChild(header);

const main = document.createElement("div");
main.innerText = "burda";
main.classList.add("main");
document.getElementById("demo").appendChild(main);

const footer = document.createElement("div");
footer.innerText = "tutaj";
footer.classList.add("footer");
document.getElementById("demo").appendChild(footer);
