import { faker } from "@faker-js/faker";
import { GPSCoord, Mappable } from "./GoogleMap";

export class User implements Mappable {
    name: string;
    location: GPSCoord;

    constructor() {
        this.name = faker.name.fullName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}