import { serviceElem, serviceDropDown } from "./navbar.astro.0.mts";

serviceElem.addEventListener("click", () => {
console.log("event ran");
serviceDropDown.classList.toggle("whFull");
});
