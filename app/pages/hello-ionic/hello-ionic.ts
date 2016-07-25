import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  ofertas = [{
      imagem:'http://www.festivalsherpa.com/wp-content/uploads/2015/09/cover.jpg',
      nome: 'Nine Inch Nails Live',
      descricao: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.'
  },{
      imagem:'http://www.festivalsherpa.com/wp-content/uploads/2015/09/cover.jpg',
      nome: 'Nine Inch Nails Live',
      descricao: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.'
  },{
      imagem:'http://www.festivalsherpa.com/wp-content/uploads/2015/09/cover.jpg',
      nome: 'Nine Inch Nails Live',
      descricao: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.'
  }
  ];
  constructor() {

  }

}
