import {BarcodeScanner, ActionSheet} from 'ionic-native';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UtilServices {
    http: Http;
    retorno:string;
    constructor(http: Http) {
        this.http = http;
    }
    getProduto(id:string) {
        this.http.get('http://sandbox.buscape.com.br/service/findOfferList/586f7a657574375237514d3d/?barcode=' + id + '&format=json').subscribe((data) => {
            alert(data.json().product[0].product.productname);
        }, (err) => {
            alert(err);
        });
    }
    scannear():string {
        BarcodeScanner.scan().then((barcodeData) => {
          this.retorno = barcodeData.json().text.toString();
        }, (err) => {
            this.retorno = err;
            alert(err);
        });
        return this.retorno;
    }
}
