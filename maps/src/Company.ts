import { faker } from "@faker-js/faker";
import { Mappable, GPSCoord } from "./GoogleMap";

export class Company implements Mappable{
    name: string;
    catchPhrase: string;
    location: GPSCoord;

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}