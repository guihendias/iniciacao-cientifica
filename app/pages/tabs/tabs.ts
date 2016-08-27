import {Component} from '@angular/core'
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import {SearchProductPage} from '../search-product/search-product';
import {AboutPage} from '../about/about';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

    private tab1Root: any;
    private tab2Root: any;
    private tab3Root: any;

    constructor(private nav: NavController) {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HelloIonicPage;
        this.tab2Root = SearchProductPage;
        this.tab3Root = AboutPage;
    }

}
