import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import {CallNumber} from 'ionic-native';
import {Fire} from '../../services/Fire';
declare var google: any;

@Component({
    templateUrl: 'build/pages/store-map/store-map.html',
})
export class StoreMapPage {
    store: any;
    constructor(private navCtrl: NavController, platform: Platform, private fire: Fire, private params: NavParams) {
        this.store = params.get('store');

        platform.ready().then(() => {
            this.initPage(this.store);
        });
    }

    private initPage(store: any) {

        let latLng = new google.maps.LatLng(store.lat, store.lng);

        let mapOptions = {
            center: latLng,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };

        let element = document.getElementById('map');

        let map = new google.maps.Map(element, mapOptions);

        let market = new google.maps.Marker({
            position: latLng
        })
        market.setMap(map);
    }

    callStore() {
        CallNumber.callNumber(this.store.tel, true)
            .then(() => console.log('Launched dialer!'))
            .catch(() => console.log('Error launching dialer'));
    }
}
