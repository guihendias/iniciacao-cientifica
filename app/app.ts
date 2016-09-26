import {Component,ViewChild} from '@angular/core';
import {Platform,MenuController,App, ionicBootstrap,Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {AboutPage} from './pages/about/about';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
import {UtilServices} from './services/UtilServices';
import {InviteFriendsPage} from'./pages/invite-friends/invite-friends';
import {ReportBugsPage} from './pages/report-bugs/report-bugs';
import {ConfigPage} from './pages/config/config';
import { Fire } from './services/Fire';

@Component({
  templateUrl: './build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any, icon: string}>;
  user:any ;

   constructor(
     private platform: Platform,
     private menu: MenuController,
     private util: UtilServices,
     private fire: Fire
   ) {
     this.initializeApp();

     // set our app's pages
     this.pages = [
       { title: 'Home', component: HomePage, icon: 'home' },
       { title: 'Conquistas', component: ListPage, icon: 'trophy' },
       { title: 'Configurações', component: ConfigPage, icon: 'settings' },
       { title: 'Convide um amigo', component: InviteFriendsPage, icon:'person-add' },
       { title: 'Relatar um Problema', component: ReportBugsPage, icon:'alert' },
       { title: 'Sobre', component: AboutPage, icon:'information-circle' },
       { title: 'Sair', component: TabsPage, icon:'log-out' }
     ];
      this.user = fire.user;
   }

   initializeApp() {
     this.platform.ready().then(() => {
      StatusBar.backgroundColorByHexString('#83AEF7');
     });
   }

   openPage(page) {
     // close the menu when clicking a link from the menu
     this.menu.close();
     // navigate to the new page if it is not the current page
     this.nav.setRoot(page.component);
   }
}

ionicBootstrap(MyApp,[UtilServices, Fire]);
