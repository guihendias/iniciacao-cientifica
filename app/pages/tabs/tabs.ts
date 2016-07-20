import {Component} from '@angular/core'
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import {LoginPage} from '../login/login';
import {AboutPage} from '../about/about';
import {BarcodeScanner} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HelloIonicPage;
    this.tab2Root = LoginPage;
    this.tab3Root = AboutPage;
  }
  scannear() {
      BarcodeScanner.scan().then((barcodeData) => {
          alert(JSON.stringify(barcodeData));
      }, (err) => {
          alert(err);
      });
  }

}
