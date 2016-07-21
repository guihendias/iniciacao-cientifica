import {Component} from '@angular/core'
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import {LoginPage} from '../login/login';
import {AboutPage} from '../about/about';
import {BarcodeScanner} from 'ionic-native';
import {NavController} from 'ionic-angular';
import {UtilServices} from '../../services/UtilServices';
import {Http} from '@angular/http'
import {Produto} from '../../model/Produto';
import {ProdutoInfo} from '../produto-info/produto-info';

@Component({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
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
            this.util.getProduto(barcodeData).subscribe((data) => {
                this.produto = new Produto(data);
                this.nav.push(ProdutoInfo, { 'produto': this.produto });
            });
        }, (err) => {
            alert(err);
        });
    }
}
