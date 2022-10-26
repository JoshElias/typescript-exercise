import { GoogleMap } from "./GoogleMap";
import { User } from "./User";
import { Company } from "./Company";

const mapEl = document.getElementById("map");
if(!mapEl) {
    throw new Error("map div does not exist");
}
const map = new GoogleMap(mapEl);

const user1 = new User();
map.addMarker(user1)
const company1 = new Company();
map.addMarker(company1);