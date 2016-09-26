import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {UtilServices} from '../../services/UtilServices';
import { Fire } from '../../services/Fire';
import {Http} from '@angular/http'
import {Produto} from '../../model/Produto';
import {ProdutoInfo} from '../produto-info/produto-info';
import {BarcodeScanner, Toast} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/search-product/search-product.html',
})
export class SearchProductPage {

    firebase: any;
    produto: Produto;
    private searchQuery: string = '';
    private items: any[];
    codigoDeBarras: string;

    constructor(private http: Http, private util: UtilServices, private nav: NavController, private loading: LoadingController, private fire: Fire) {
      this.initializeItems();
      this.firebase = fire.getDB();
    }
    loader = this.loading.create({
        content: "Please wait...",
        duration: 2500
    });
    scannear() {
        BarcodeScanner.scan().then((barcodeData) => {
            if (barcodeData.text != '') {
                this.util.getProduto(barcodeData.text).subscribe((data) => {
                    console.log(data);
                    if (data.product != undefined) {
                        this.loader.present();
                        this.produto = new Produto(data, barcodeData.text);
                        this.nav.push(ProdutoInfo, { 'produto': this.produto });
                    } else {
                        Toast.showShortBottom("Produto não encontrado").subscribe((toast) => {
                            console.log(toast);
                        });
                    }
                });
            }
        }, (err) => {
            alert(err);
        });
    }

    initializeItems() {
      this.items = this.fire.getProducts();
    }

    getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return ((item.name + '').toLowerCase().indexOf((val+'').toLowerCase()) > -1);
            })
        }
    }
}
