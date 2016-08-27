import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/report-bugs/report-bugs.html',
})
export class ReportBugsPage {

  constructor(private nav: NavController, private navParams: NavParams) {

  }
  voltar() {
      this.nav.push(TabsPage);
  }

}
