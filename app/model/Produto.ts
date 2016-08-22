
export class Produto {

    nome: string;
    thumbnail: string;
    precoMin: number;
    precoMax: number;
    codigoDeBarras: string;

    constructor(produtoInfo: any) {
        this.nome = produtoInfo.product[0].product.productname;
        this.thumbnail = produtoInfo.product[0].product.thumbnail.url;
        this.precoMin = Number(produtoInfo.product[0].product.pricemin);
        this.precoMax = Number(produtoInfo.product[0].product.pricemax);
        if(produtoInfo.product[0].offer != undefined){
          this.codigoDeBarras = produtoInfo.offer[0].offer.sku;
      } else {
          this.codigoDeBarras = 'indisponivel';
      }
    }
}
