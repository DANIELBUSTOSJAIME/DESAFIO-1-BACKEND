import ProductManager from "./ProductManager.js";
import Product from "./Product.js";

const productManagers = new ProductManager();
const product1 = new Product("Notebook", "HP 2023", 100000, "image", 50)
const product2 = new Product("Notebook", "Baio 2022", 90000, "image", 35)

productManagers.addProduct(product1);
productManagers.addProduct(product2);

console.log(productManagers.getProducts())
console.log(productManagers.getProductById(1))