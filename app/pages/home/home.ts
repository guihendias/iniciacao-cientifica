import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner,ActionSheet} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  buttonLabels = ['Share via Facebook', 'Share via Twitter'];
  
    constructor(private nav: NavController) {

    }
    scannear() {
        BarcodeScanner.scan().then((barcodeData) => {
            alert(barcodeData);
        }, (err) => {
            alert(err);
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
        this.nav.pop();
    }
}
