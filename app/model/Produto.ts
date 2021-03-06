
export class Produto {

    nome: string;
    thumbnail: string;
    precoMin: number;
    precoMax: number;
    codigoDeBarras: string;

    constructor(produtoInfo: any,sku) {
        this.nome = produtoInfo.product[0].product.productname;
        this.thumbnail = produtoInfo.product[0].product.thumbnail.url;
        this.precoMin = Number(produtoInfo.product[0].product.pricemin);
        this.precoMax = Number(produtoInfo.product[0].product.pricemax);
        this.codigoDeBarras = sku;
    }
}
