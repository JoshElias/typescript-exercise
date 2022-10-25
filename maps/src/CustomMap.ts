/// <reference types="@types/google.maps" />
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
}