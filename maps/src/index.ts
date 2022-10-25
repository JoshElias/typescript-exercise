import { CustomMap } from "./CustomMap";

const mapEl = document.getElementById("map");
if(!mapEl) {
    throw new Error("map div does not exist");
}
const map = new CustomMap(mapEl);