import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const mapEl = document.getElementById("map");
if(!mapEl) {
    throw new Error("map div does not exist");
}
const map = new CustomMap(mapEl);

const user1 = new User();
map.addUserMarker(user1)
const company1 = new Company();
map.addCompanyMarker(company1);