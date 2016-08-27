import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/config/config.html',
})
export class ConfigPage {

  constructor(private nav: NavController, private navParams: NavParams) {

  }
  voltar() {
      this.nav.push(TabsPage);
  }

}
