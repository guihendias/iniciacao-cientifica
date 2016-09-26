import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Fire} from '../../services/Fire';

@Component({
    templateUrl: 'build/pages/chat/chat.html',
})
export class ChatPage {
    firebase: any;
    messagesList: any = [];

    friend: any;
    message: string;

    constructor(private navCtrl: NavController, private fire: Fire, private navParams: NavParams) {
        this.firebase = fire.getDB();
        this.initPage();
        this.friend = navParams.get('friend');
    }

    initPage() {
        this.fire.getMessage(message => {
            this.messagesList = message;
        })
        if(this.messagesList.length == 0) {
          this.messagesList.push({
            from: "URI",
            content: "Hello!"
          })
        }
    }

    onSendMessage() {
        this.firebase.sendMessage(this.friend, this.message);
    }
}
