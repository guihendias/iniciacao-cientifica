import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Produto} from '../../model/Produto';
import {UtilServices} from '../../services/UtilServices';
import {TabsPage} from '../tabs/tabs';

@Component({
    templateUrl: 'build/pages/produto-info/produto-info.html',
})
export class ProdutoInfo {
    produto: Produto;

    constructor(private nav: NavController, private navParams: NavParams, private util: UtilServices) {
        this.produto = navParams.get('produto');
    }
    voltar() {
        this.nav.push(TabsPage);
    }
}
