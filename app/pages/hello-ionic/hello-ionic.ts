import {Page} from 'ionic-angular';
import { PhotoViewer, SocialSharing  } from 'ionic-native';
import { NavController, Platform } from 'ionic-angular';
import {StoreMapPage} from '../store-map/store-map';
import { Fire } from '../../services/Fire';

@Page({
    templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
    ofertas = [];
    products = [];
    stores = [];

    constructor(private nav: NavController, private fire: Fire, private platform: Platform) {
        platform.ready().then(() => {

            this.products = fire.getProducts();
            this.stores = fire.getStores();
            this.ofertas = fire.getSales();

            console.log(this.stores[0]);
            console.log(this.products[0].name);
            console.log(this.ofertas[0]);
        });
    }

    viewImage(src, name) {
        PhotoViewer.show(src, name, { share: false });
    }

    openMap(store) {
        this.nav.push(StoreMapPage, {store: store});
    }

    doRefresh(refresher) {
        this.products = this.fire.getProducts();
        this.stores = this.fire.getStores();
        this.ofertas = this.fire.getSales();

        setTimeout(() => {
            refresher.complete();
        }, 2000);
    }

    shareProduct(product) {
        SocialSharing.shareViaFacebook("Veja essa oferta: " + product.name + " por R$" + product.price, product.thumbnail, 'http://www.teste.com.br');
    }

}
