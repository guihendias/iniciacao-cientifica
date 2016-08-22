import {Component} from '@angular/core'
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import {LoginPage} from '../login/login';
import {AboutPage} from '../about/about';
import {BarcodeScanner,Toast} from 'ionic-native';
import {NavController,Loading} from 'ionic-angular';
import {UtilServices} from '../../services/UtilServices';
import {Http} from '@angular/http'
import {Produto} from '../../model/Produto';
import {ProdutoInfo} from '../produto-info/produto-info';

@Component({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
   loading = Loading.create({
     content: "Please wait...",
     duration: 2500
   });

    produto:Produto;
    private tab1Root: any;
    private tab2Root: any;
    private tab3Root: any;

    codigoDeBarras: string;

    constructor(private http: Http, private util: UtilServices, private nav: NavController) {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HelloIonicPage;
        this.tab2Root = LoginPage;
        this.tab3Root = AboutPage;
    }
    scannear() {
        BarcodeScanner.scan().then((barcodeData) => {
          this.nav.present(this.loading);
            this.util.getProduto(barcodeData.text).subscribe((data) => {
              console.log(data);
              if(data != undefined){
                this.produto = new Produto(data);
                this.nav.push(ProdutoInfo, { 'produto': this.produto });
              } else {
                Toast.showShortBottom("Produto não encontrado").subscribe((toast) => {
                  console.log(toast);
                });
              }
            });
        }, (err) => {
            alert(err);
        });
    }
}
