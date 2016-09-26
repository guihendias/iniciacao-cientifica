import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {BarcodeScanner,Badge, ActionSheet} from 'ionic-native';
import {TabsPage} from '../tabs/tabs';
import {Produto} from '../../model/Produto';
import {UtilServices} from '../../services/UtilServices';
import {ProdutoInfo} from '../produto-info/produto-info';

declare var AdMob: any;

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    private admobId: any;
    buttonLabels = ['Share via Facebook', 'Share via Twitter'];
    retorno: string;
    produto: Produto;
    constructor(private nav: NavController, private util: UtilServices, private platform: Platform) {
             if(/(android)/i.test(navigator.userAgent)) {
                 this.admobId = {
                     banner: 'ca-app-pub-1451260466330761/7792546937',
                     interstitial: 'ca-app-pub-1451260466330761/9269280135'
                 };
             } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
                 this.admobId = {
                     banner: 'ca-app-pub-1451260466330761/7792546937',
                     interstitial: 'ca-app-pub-1451260466330761/9269280135'
                 };
             }
             alert(this.admobId.banner);
    }
    aumentar(){
      console.log(Badge.hasPermission());
      Badge.set(1);
    }
    zerar(){
      Badge.clear();
    }
    scannear() {
        this.util.getProduto('9788576080855').subscribe((data) => {
            this.produto = new Produto(data,'9788576080855');
            this.nav.push(ProdutoInfo, { 'produto': this.produto });
        });
    }

    mostrar() {
        ActionSheet.show({
            'title': 'What do you want with this image?',
            'buttonLabels': this.buttonLabels,
            'addCancelButtonWithLabel': 'Cancel',
            'addDestructiveButtonWithLabel': 'Delete'
        }).then(buttonIndex => {
            console.log('Button pressed: ' + this.buttonLabels[buttonIndex - 1]);
        });
    }
    voltar() {
        this.nav.push(TabsPage);
    }
    createBanner() {
       this.platform.ready().then(() => {
           if(AdMob) {
               AdMob.createBanner({
                   adId: this.admobId.banner,
                   autoShow: false
               });
           }
       });
   }

   showInterstitial() {
       this.platform.ready().then(() => {
           if(AdMob) {
               AdMob.prepareInterstitial({
                   adId: this.admobId.interstitial,
                   autoShow: true
               });
           }
       });
   }

   showBanner(position) {
       this.platform.ready().then(() => {
           if(AdMob) {
               var positionMap = {
                   "bottom": AdMob.AD_POSITION.BOTTOM_CENTER,
                   "top": AdMob.AD_POSITION.TOP_CENTER
               };
               AdMob.showBanner(positionMap[position.toLowerCase()]);
           }
       });
   }

   hideBanner(position) {
       this.platform.ready().then(() => {
           if(AdMob) {
               AdMob.hideBanner();
           }
       });
   }
}
