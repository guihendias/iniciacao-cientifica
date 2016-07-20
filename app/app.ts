import {Component,ViewChild} from '@angular/core';
import {Platform,MenuController,App, ionicBootstrap,Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';


@Component({
  templateUrl: './build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
  pages: Array<{title: string, component: any, icon: string}>;

   constructor(
     private platform: Platform,
     private menu: MenuController
   ) {
     this.initializeApp();

     // set our app's pages
     this.pages = [
       { title: 'Home', component: HomePage, icon: 'home' },
       { title: 'List Example', component: ListPage, icon: 'list' },
       { title: 'Login', component: LoginPage, icon:'log-in' },
       { title: 'Tabs', component: TabsPage, icon:'menu' }
     ];
   }

   initializeApp() {
     this.platform.ready().then(() => {
       // Okay, so the platform is ready and our plugins are available.
       // Here you can do any higher level native things you might need.
       StatusBar.styleDefault();
     });
   }

   openPage(page) {
     // close the menu when clicking a link from the menu
     this.menu.close();
     // navigate to the new page if it is not the current page
     this.nav.setRoot(page.component);
   }
}

ionicBootstrap(MyApp);
