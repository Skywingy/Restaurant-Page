/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAbout": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function render() {
const main = document.createElement("main");
main.classList.add("main");

const bienvenidos = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    null,
    ["cursive", "golden"],
    "Ichiraku"
);
const title = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h1", null, ["gray"], "Over the years");

const hr = document.createElement("hr");

const contenty =
    "Ramen Ichiraku was founded by Teuchi thirty-four years before the start of Part II. Although it is quite small and has an unassuming appearance, Ramen Ichiraku has always been popular with Konoha's villagers because of Teuchi's strong commitment to taste, giving the ramen an almost artistic quality. Like any ramen establishment, Ramen Ichiraku offers various toppings, such as char siu and boiled eggs. In Konoha Hiden, seaweed had been the most popular topping for several years until, after the Fourth Shinobi World War, it was surpassed by naruto.";
const p = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p", null, ["menu-item"], contenty);

  main.appendChild(bienvenidos);
  main.appendChild(title);
  main.appendChild(hr);
  main.appendChild(p);

  _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);
}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFooter": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function render() {
const footer = document.createElement("footer");
const p = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    null,
    ["golden"],
    "Developed with ♥ by Nyam-Erdene"
);
footer.appendChild(p);
content.appendChild(footer);
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function render() {
const main = document.createElement("main");

const bienvenidos = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    null,
    ["cursive", "golden"],
    "Ichiraku"
);
const title = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h1", null, ["white"], "Ramen");

const hr = document.createElement("hr");
const subtitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    null,
    ["text-center", "white"],
    "Rāmen Ichiraku, literally meaning: Ramen is the Best Pleasure"
);
const button = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("button", null, null, "Menu");

main.appendChild(bienvenidos);
main.appendChild(title);
main.appendChild(hr);
main.appendChild(subtitle);
main.appendChild(button);

_index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "createHtmlElement": () => (/* binding */ createHtmlElement)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/about.js");








const content = document.getElementById("content");




function createHtmlElement(type, id, arrayClasses, content) {
const element = document.createElement(type);
if (id) element.id = id;
if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));

if (content) element.innerText = content;

return element;
}

function home() {
    content.innerHTML = "";
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();
}
function menu() {
    content.innerHTML = "";
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();
    (0,_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();
}
function about() {
    content.innerHTML = "";
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();
    (0,_about__WEBPACK_IMPORTED_MODULE_4__.renderAbout)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();
}

home();

document.addEventListener("click", (e) => {
    const target = e.target.innerText;

    if (target === "HOME") home();
    if (target === "MENU" || target === "Menu") menu();
    if (target === "ABOUT") about();
});



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenu": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const menu = [
{
    name: "Chicken Ramen",
    description:
    "Easy homemade chicken ramen, with a flavorful broth, roasted chicken, fresh veggies, lots of noodles, and a soft cooked egg. Inspired by traditional Japanese ramen, but on the table in under an hour.",
    price: "20$",
},
{
    name: "Pinch of Yum",
    description:
    "Take the usual ramen up a notch with this quick homemade ramen. Fresh veggies and herbs make this extra delicious, healthy, and cozy!",
    price: "20$",
},
{
    name: "Kimchi Ramen",
    description:
    "Kimchi is an essential ingredient in Asian culture. In essence, it is fermented vegetables that add so much flavor to any dish!",
    price: "20$",
},
];

function render() {
const main = document.createElement("main");
main.classList.add("main");

const bienvenidos = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p", null, ["cursive", "golden"], "Ichiraku"
);

const title = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h1", null, ["gray"], "Menu");

const hr = document.createElement("hr");

main.appendChild(bienvenidos);
main.appendChild(title);
main.appendChild(hr);

menu.forEach((item) => {
    const div = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", null, ["menu-item"], null);

    const name = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h2", null, ["golden"], item.name);
    const description = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(
    "p",
    null,
    ["gray"],
    item.description
    );
    const price = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h2", null, ["golden"], item.price);
    const hr = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("hr", null, ["menu-hr"], null);

    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(hr);

    main.appendChild(div);
});

_index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);
}



/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNav": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function render() {
const navItems = ["home", "menu", "about"];
const ul = document.createElement("ul");

navItems.forEach((item) =>
    ul.appendChild((0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("li", null, null, item))
);

const nav = document.createElement("nav");
nav.appendChild(ul);

_index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(nav);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IseURBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlEQUFpQjs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBLFVBQVUseURBQWlCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHVEQUFtQjtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnNEOztBQUV0RDtBQUNBO0FBQ0EsVUFBVSx5REFBaUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNacUQ7O0FBRXJEO0FBQ0E7O0FBRUEsb0JBQW9CLHlEQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5REFBaUI7O0FBRS9CO0FBQ0EsaUJBQWlCLHlEQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5REFBaUI7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdURBQW1CO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JxQztBQUNEO0FBQ0k7QUFDSjtBQUNFOzs7O0FBSXRDOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxrREFBUztBQUNiLElBQUksaURBQVU7QUFDZCxJQUFJLHFEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVM7QUFDYixJQUFJLGlEQUFVO0FBQ2QsSUFBSSxxREFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSxtREFBVztBQUNmLElBQUkscURBQVk7QUFDaEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Eb0Q7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQix5REFBaUI7QUFDckM7O0FBRUEsY0FBYyx5REFBaUI7O0FBRS9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix5REFBaUI7O0FBRWpDLGlCQUFpQix5REFBaUI7QUFDbEMsd0JBQXdCLHlEQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlEQUFpQjtBQUNuQyxlQUFlLHlEQUFpQjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVELHVEQUFtQjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RHFEOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIseURBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUEsdURBQW1CO0FBQ25COzs7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRlbnQsIGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xubWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuY29uc3QgYmllbnZlbmlkb3MgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICBcInBcIixcbiAgICBudWxsLFxuICAgIFtcImN1cnNpdmVcIiwgXCJnb2xkZW5cIl0sXG4gICAgXCJJY2hpcmFrdVwiXG4pO1xuY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudChcImgxXCIsIG51bGwsIFtcImdyYXlcIl0sIFwiT3ZlciB0aGUgeWVhcnNcIik7XG5cbmNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuXG5jb25zdCBjb250ZW50eSA9XG4gICAgXCJSYW1lbiBJY2hpcmFrdSB3YXMgZm91bmRlZCBieSBUZXVjaGkgdGhpcnR5LWZvdXIgeWVhcnMgYmVmb3JlIHRoZSBzdGFydCBvZiBQYXJ0IElJLiBBbHRob3VnaCBpdCBpcyBxdWl0ZSBzbWFsbCBhbmQgaGFzIGFuIHVuYXNzdW1pbmcgYXBwZWFyYW5jZSwgUmFtZW4gSWNoaXJha3UgaGFzIGFsd2F5cyBiZWVuIHBvcHVsYXIgd2l0aCBLb25vaGEncyB2aWxsYWdlcnMgYmVjYXVzZSBvZiBUZXVjaGkncyBzdHJvbmcgY29tbWl0bWVudCB0byB0YXN0ZSwgZ2l2aW5nIHRoZSByYW1lbiBhbiBhbG1vc3QgYXJ0aXN0aWMgcXVhbGl0eS4gTGlrZSBhbnkgcmFtZW4gZXN0YWJsaXNobWVudCwgUmFtZW4gSWNoaXJha3Ugb2ZmZXJzIHZhcmlvdXMgdG9wcGluZ3MsIHN1Y2ggYXMgY2hhciBzaXUgYW5kIGJvaWxlZCBlZ2dzLiBJbiBLb25vaGEgSGlkZW4sIHNlYXdlZWQgaGFkIGJlZW4gdGhlIG1vc3QgcG9wdWxhciB0b3BwaW5nIGZvciBzZXZlcmFsIHllYXJzIHVudGlsLCBhZnRlciB0aGUgRm91cnRoIFNoaW5vYmkgV29ybGQgV2FyLCBpdCB3YXMgc3VycGFzc2VkIGJ5IG5hcnV0by5cIjtcbmNvbnN0IHAgPSBjcmVhdGVIdG1sRWxlbWVudChcInBcIiwgbnVsbCwgW1wibWVudS1pdGVtXCJdLCBjb250ZW50eSk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChiaWVudmVuaWRvcyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBtYWluLmFwcGVuZENoaWxkKGhyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChwKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgeyByZW5kZXIgYXMgcmVuZGVyQWJvdXQgfTsiLCJpbXBvcnQgeyAkY29udGVudCwgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuY29uc3QgcCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIG51bGwsXG4gICAgW1wiZ29sZGVuXCJdLFxuICAgIFwiRGV2ZWxvcGVkIHdpdGgg4pmlIGJ5IE55YW0tRXJkZW5lXCJcbik7XG5mb290ZXIuYXBwZW5kQ2hpbGQocCk7XG5jb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCB7IHJlbmRlciBhcyByZW5kZXJGb290ZXIgfTsiLCJpbXBvcnQgeyBjb250ZW50LCBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuY29uc3QgYmllbnZlbmlkb3MgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgICBcInBcIixcbiAgICBudWxsLFxuICAgIFtcImN1cnNpdmVcIiwgXCJnb2xkZW5cIl0sXG4gICAgXCJJY2hpcmFrdVwiXG4pO1xuY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudChcImgxXCIsIG51bGwsIFtcIndoaXRlXCJdLCBcIlJhbWVuXCIpO1xuXG5jb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbmNvbnN0IHN1YnRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgbnVsbCxcbiAgICBbXCJ0ZXh0LWNlbnRlclwiLCBcIndoaXRlXCJdLFxuICAgIFwiUsSBbWVuIEljaGlyYWt1LCBsaXRlcmFsbHkgbWVhbmluZzogUmFtZW4gaXMgdGhlIEJlc3QgUGxlYXN1cmVcIlxuKTtcbmNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiYnV0dG9uXCIsIG51bGwsIG51bGwsIFwiTWVudVwiKTtcblxubWFpbi5hcHBlbmRDaGlsZChiaWVudmVuaWRvcyk7XG5tYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcbm1haW4uYXBwZW5kQ2hpbGQoaHIpO1xubWFpbi5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5tYWluLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCB7IHJlbmRlciBhcyByZW5kZXJIb21lIH07IiwiaW1wb3J0IHsgcmVuZGVyTmF2IH0gZnJvbSBcIi4vbmF2YmFyXCI7XG5pbXBvcnQgeyByZW5kZXJIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgcmVuZGVyRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgcmVuZGVyQWJvdXQgfSBmcm9tIFwiLi9hYm91dFwiO1xuXG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlSHRtbEVsZW1lbnQodHlwZSwgaWQsIGFycmF5Q2xhc3NlcywgY29udGVudCkge1xuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5pZiAoaWQpIGVsZW1lbnQuaWQgPSBpZDtcbmlmIChhcnJheUNsYXNzZXMpXG4gICAgYXJyYXlDbGFzc2VzLmZvckVhY2goKG15Q2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChteUNsYXNzKSk7XG5cbmlmIChjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG5cbnJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICByZW5kZXJOYXYoKTtcbiAgICByZW5kZXJIb21lKCk7XG4gICAgcmVuZGVyRm9vdGVyKCk7XG59XG5mdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICByZW5kZXJOYXYoKTtcbiAgICByZW5kZXJNZW51KCk7XG4gICAgcmVuZGVyRm9vdGVyKCk7XG59XG5mdW5jdGlvbiBhYm91dCgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmVuZGVyTmF2KCk7XG4gICAgcmVuZGVyQWJvdXQoKTtcbiAgICByZW5kZXJGb290ZXIoKTtcbn1cblxuaG9tZSgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5pbm5lclRleHQ7XG5cbiAgICBpZiAodGFyZ2V0ID09PSBcIkhPTUVcIikgaG9tZSgpO1xuICAgIGlmICh0YXJnZXQgPT09IFwiTUVOVVwiIHx8IHRhcmdldCA9PT0gXCJNZW51XCIpIG1lbnUoKTtcbiAgICBpZiAodGFyZ2V0ID09PSBcIkFCT1VUXCIpIGFib3V0KCk7XG59KTtcblxuZXhwb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQsIGNvbnRlbnQgfTsiLCJpbXBvcnQgeyBjb250ZW50LCBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IG1lbnUgPSBbXG57XG4gICAgbmFtZTogXCJDaGlja2VuIFJhbWVuXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgXCJFYXN5IGhvbWVtYWRlIGNoaWNrZW4gcmFtZW4sIHdpdGggYSBmbGF2b3JmdWwgYnJvdGgsIHJvYXN0ZWQgY2hpY2tlbiwgZnJlc2ggdmVnZ2llcywgbG90cyBvZiBub29kbGVzLCBhbmQgYSBzb2Z0IGNvb2tlZCBlZ2cuIEluc3BpcmVkIGJ5IHRyYWRpdGlvbmFsIEphcGFuZXNlIHJhbWVuLCBidXQgb24gdGhlIHRhYmxlIGluIHVuZGVyIGFuIGhvdXIuXCIsXG4gICAgcHJpY2U6IFwiMjAkXCIsXG59LFxue1xuICAgIG5hbWU6IFwiUGluY2ggb2YgWXVtXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgXCJUYWtlIHRoZSB1c3VhbCByYW1lbiB1cCBhIG5vdGNoIHdpdGggdGhpcyBxdWljayBob21lbWFkZSByYW1lbi4gRnJlc2ggdmVnZ2llcyBhbmQgaGVyYnMgbWFrZSB0aGlzIGV4dHJhIGRlbGljaW91cywgaGVhbHRoeSwgYW5kIGNvenkhXCIsXG4gICAgcHJpY2U6IFwiMjAkXCIsXG59LFxue1xuICAgIG5hbWU6IFwiS2ltY2hpIFJhbWVuXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgXCJLaW1jaGkgaXMgYW4gZXNzZW50aWFsIGluZ3JlZGllbnQgaW4gQXNpYW4gY3VsdHVyZS4gSW4gZXNzZW5jZSwgaXQgaXMgZmVybWVudGVkIHZlZ2V0YWJsZXMgdGhhdCBhZGQgc28gbXVjaCBmbGF2b3IgdG8gYW55IGRpc2ghXCIsXG4gICAgcHJpY2U6IFwiMjAkXCIsXG59LFxuXTtcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xubWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuY29uc3QgYmllbnZlbmlkb3MgPSBjcmVhdGVIdG1sRWxlbWVudChcInBcIiwgbnVsbCwgW1wiY3Vyc2l2ZVwiLCBcImdvbGRlblwiXSwgXCJJY2hpcmFrdVwiXG4pO1xuXG5jb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiaDFcIiwgbnVsbCwgW1wiZ3JheVwiXSwgXCJNZW51XCIpO1xuXG5jb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxubWFpbi5hcHBlbmRDaGlsZChiaWVudmVuaWRvcyk7XG5tYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcbm1haW4uYXBwZW5kQ2hpbGQoaHIpO1xuXG5tZW51LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBkaXYgPSBjcmVhdGVIdG1sRWxlbWVudChcImRpdlwiLCBudWxsLCBbXCJtZW51LWl0ZW1cIl0sIG51bGwpO1xuXG4gICAgY29uc3QgbmFtZSA9IGNyZWF0ZUh0bWxFbGVtZW50KFwiaDJcIiwgbnVsbCwgW1wiZ29sZGVuXCJdLCBpdGVtLm5hbWUpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgbnVsbCxcbiAgICBbXCJncmF5XCJdLFxuICAgIGl0ZW0uZGVzY3JpcHRpb25cbiAgICApO1xuICAgIGNvbnN0IHByaWNlID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJoMlwiLCBudWxsLCBbXCJnb2xkZW5cIl0sIGl0ZW0ucHJpY2UpO1xuICAgIGNvbnN0IGhyID0gY3JlYXRlSHRtbEVsZW1lbnQoXCJoclwiLCBudWxsLCBbXCJtZW51LWhyXCJdLCBudWxsKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGhyKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcbn0pO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgeyByZW5kZXIgYXMgcmVuZGVyTWVudSB9OyIsImltcG9ydCB7IGNvbnRlbnQsIGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuY29uc3QgbmF2SXRlbXMgPSBbXCJob21lXCIsIFwibWVudVwiLCBcImFib3V0XCJdO1xuY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbm5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+XG4gICAgdWwuYXBwZW5kQ2hpbGQoY3JlYXRlSHRtbEVsZW1lbnQoXCJsaVwiLCBudWxsLCBudWxsLCBpdGVtKSlcbik7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXYuYXBwZW5kQ2hpbGQodWwpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKG5hdik7XG59XG5cbmV4cG9ydCB7IHJlbmRlciBhcyByZW5kZXJOYXYgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9