import {BarcodeScanner, ActionSheet} from 'ionic-native';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {Produto} from '../model/Produto';
import {ProdutoInfo} from '../pages/produto-info/produto-info';
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
