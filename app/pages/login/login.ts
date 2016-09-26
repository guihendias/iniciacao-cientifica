import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UtilServices} from '../../services/UtilServices';
import {TabsPage} from '../tabs/tabs';
import {Fire} from '../../services/fire';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private util : UtilServices, private fire: Fire) {

  }
  login(){
    this.util.facebookLogin(response => {
         this.fire.login(response.accessToken, () => {
           this.navCtrl.setRoot(TabsPage);
         }, error => {
           alert(error);
         })
       }, error => {
         alert(error.errorMessage);
       });
  }
}
