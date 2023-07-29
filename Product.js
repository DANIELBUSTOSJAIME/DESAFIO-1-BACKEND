export default class Product {
    static codecount = 0;

    constructor(title, description, price, thumbnail, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        Product.codecount++;
        this.code = Product.codecount;
        this.stock = stock;
    }

    



}

