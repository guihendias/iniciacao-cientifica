import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {UtilServices} from '../../services/UtilServices';
import {Http} from '@angular/http'
import {Produto} from '../../model/Produto';
import {ProdutoInfo} from '../produto-info/produto-info';
import {BarcodeScanner, Toast} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/search-product/search-product.html',
})
export class SearchProductPage {

    produto: Produto;
    private searchQuery: string = '';
    private items: string[];
    codigoDeBarras: string;

    constructor(private http: Http, private util: UtilServices, private nav: NavController, private loading: LoadingController) {
        //      this.initializeItems();
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
                    this.produto = new Produto(data);
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
    /*    initializeItems() {
            this.items = [
                'Amsterdam',
                'Bogota',
                ...
       ];
        }

        getItems(ev: any) {
            // Reset items back to all of the items
            this.initializeItems();

            // set val to the value of the searchbar
            let val = ev.target.value;

            // if the value is an empty string don't filter the items
            if (val && val.trim() != '') {
                this.items = this.items.filter((item) => {
                    return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
                })
            }
        }
    */
}
