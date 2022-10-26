/// <reference types="@types/google.maps" />

export interface GPSCoord {
    lat: number,
    lng: number
}

export interface Mappable {
    location: GPSCoord
}

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

    addMarker(v: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: { ...v.location }
        })
    }
}