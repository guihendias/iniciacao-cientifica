import {Facebook, BarcodeScanner, ActionSheet} from 'ionic-native';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {Produto} from '../model/Produto';
import {ProdutoInfo} from '../pages/produto-info/produto-info';
import {TabsPage} from '../pages/tabs/tabs';

import 'rxjs/Rx';

@Injectable()
export class UtilServices {
    http: Http;
    retorno: string;
    produto: Produto;

    constructor(http: Http) {
        this.http = http;
    }

    getProduto(codigo:string) {
        return this.http.get('http://sandbox.buscape.com.br/service/findOfferList/586f7a657574375237514d3d/?barcode='+codigo+'&format=json')
        .map(data => data.json());
    }

    facebookLogin(successCallback,errorCallback){
      Facebook.login(['user_friends']).then(response => {
        console.log(response);
        successCallback(response.authResponse);
      }, error => {
        errorCallback(error);
      });
    }

    getUser(user,successCallback){
      Facebook.api('me/photos?acess_token=' + user.token,[]).then( response => {
        let photo = response.data;
        successCallback(photo);
      })
    }

  /*  getProduto(codigo:string) {
        this.http.get('http://sandbox.buscape.com.br/service/findOfferList/586f7a657574375237514d3d/?barcode='+codigo+'&format=json').subscribe((data) => {
            this.produto = new Produto(data.json());

            console.log(data.json());
            console.log(this.produto);
            this.nav.push(ProdutoInfo, {'produto': this.produto});
            //data.json().offer[0].offer.price.value
        }, (err) => {
            alert(err);
        });
    }*/
}
