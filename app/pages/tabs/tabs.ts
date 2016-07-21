import {Component} from '@angular/core'
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import {LoginPage} from '../login/login';
import {AboutPage} from '../about/about';
import {BarcodeScanner} from 'ionic-native';
import {UtilServices} from '../../services/UtilServices';
import {Http} from '@angular/http'

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  codigoDeBarras:string;

  constructor(private http: Http,private util: UtilServices) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HelloIonicPage;
    this.tab2Root = LoginPage;
    this.tab3Root = AboutPage;
  }
  scannear() {
      BarcodeScanner.scan().then((barcodeData) => {
          this.http.get('http://sandbox.buscape.com.br/service/findOfferList/586f7a657574375237514d3d/?barcode=' + barcodeData.text + '&format=json').subscribe((data) => {
              alert(data.json().product[0].product.productname);
          }, (err) => {
              alert(err);
          });
      }, (err2) => {
          alert(err2);
      });
  }
}
