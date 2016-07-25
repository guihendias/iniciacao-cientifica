import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/invite-friends/invite-friends.html',
})
export class InviteFriendsPage {

  constructor(private nav: NavController) {

  }

  convidarAmigo(){
    SocialSharing.share("Baixe agora o app", "Assunto chamativo", "", "http://www.teste.com.br");
  }
  voltar() {
      this.nav.push(TabsPage);
  }
}
