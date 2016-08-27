import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DataCards} from '../../components/data-cards/data-cards';
import {Data} from '../../components/data/data';
import {TabsPage} from '../tabs/tabs';

@Component({
   directives: [DataCards],
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  public dataList: Data[];
  public demoData: Array<{id:string, title: string,icon: string, isActive: boolean}>;

    constructor(private nav: NavController, private navParams: NavParams) {
    this.dataList = [
      new Data('Quem somos', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-remove-circle-outline', true),
      new Data('O que fazemos', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('Por que fazemos', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('title 4', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('title 5', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('title 6', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false),
      new Data('title 7', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ','ios-add-circle-outline', false)
    ];
  }
  voltar() {
      this.nav.push(TabsPage);
  }
}
