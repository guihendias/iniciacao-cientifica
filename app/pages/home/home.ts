import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner, ActionSheet} from 'ionic-native';
import {TabsPage} from '../tabs/tabs';

import {UtilServices} from '../../services/UtilServices';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    buttonLabels = ['Share via Facebook', 'Share via Twitter'];
    retorno: string;
    constructor(private nav: NavController, private util: UtilServices) {

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
