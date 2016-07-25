import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner,Badge, ActionSheet} from 'ionic-native';
import {TabsPage} from '../tabs/tabs';
import {Produto} from '../../model/Produto';
import {UtilServices} from '../../services/UtilServices';
import {ProdutoInfo} from '../produto-info/produto-info';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    buttonLabels = ['Share via Facebook', 'Share via Twitter'];
    retorno: string;
    produto: Produto;
    constructor(private nav: NavController, private util: UtilServices) {

    }
    aumentar(){
      Badge.increase(1);
    }
    zerar(){
      Badge.clear();
    }
    scannear() {
        this.util.getProduto('9788576080855').subscribe((data) => {
            this.produto = new Produto(data);
            this.nav.push(ProdutoInfo, { 'produto': this.produto });
        });
    }

mostrar() {
    ActionSheet.show({
        'title': 'What do you want with this image?',
        'buttonLabels': this.buttonLabels,
        'addCancelButtonWithLabel': 'Cancel',
        'addDestructiveButtonWithLabel': 'Delete'
    }).then(buttonIndex => {
        console.log('Button pressed: ' + this.buttonLabels[buttonIndex - 1]);
    });
}
voltar() {
    this.nav.push(TabsPage);
}
}
