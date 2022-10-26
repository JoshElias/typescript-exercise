/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(el: HTMLElement) {
        this.googleMap = new google.maps.Map(el, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addUserMarker(user: User): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: { ...user.location }
        });
    }

    addCompanyMarker(company: Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: { ...company.location }
        })
    }
}