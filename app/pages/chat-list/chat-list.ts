import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Fire } from '../../services/Fire';

@Component({
    templateUrl: 'build/pages/chat-list/chat-list.html',
})
export class ChatListPage {

    firebase: any;
    chats: any = [];

    constructor(private navCtrl: NavController, platform: Platform, private fire: Fire) {
        platform.ready().then(() => {
            this.firebase = fire.getDB();
            let user = fire.user;
            console.log(user);

            let ref = this.firebase.database().ref('chat');
            let result = [];

            ref.orderByChild('user').equalTo(user.id).on('child_added', function(snapshot) {
                result.push(snapshot.val());
            });

            this.chats = result;

            alert(this.chats[0]);
        });
    }

}
