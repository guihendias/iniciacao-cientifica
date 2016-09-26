import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from 'ionic-native';
import {Produto} from '../../model/Produto';
import {UtilServices} from '../../services/UtilServices';
import {TabsPage} from '../tabs/tabs';
import { Fire } from '../../services/Fire';

@Component({
    templateUrl: 'build/pages/produto-info/produto-info.html',
})
export class ProdutoInfo {
    produto: Produto;
    localProdutos = [];

    constructor(private nav: NavController, private navParams: NavParams, private util: UtilServices, private fire:Fire) {
        this.produto = navParams.get('produto');
        var local = [];
        this.fire.getDB().database().ref('product').orderByChild('sku').equalTo(this.produto.codigoDeBarras).on('child_added', function(snapproduct){
          console.log(snapproduct.val());
          local.push({
            name: snapproduct.val().name,
            precoMin: 4.45,
            precoMax: 7.00
          })
        });
        this.localProdutos = local;
    }
    voltar() {
        this.nav.push(TabsPage);
    }
    openVideo(id){
      YoutubeVideoPlayer.openVideo(id);
    }
}
