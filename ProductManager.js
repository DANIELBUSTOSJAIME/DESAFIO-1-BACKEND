export default class ProductManager{
    constructor(){
        this.products = []
    }

    validateCode(codeId){
        const product = this.products.find(product => product.code === codeId)
        if(product){
            console.log("El code agregado ya existe");
        }else{
            return false;
        }
    }

    addProduct(product){
        if(!this.validateCode(product.code)){
            return this.products.push(product)
        }
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        const product = this.products.find(product => product.code === id)
        if(product){
            return product
        }else{
            console.log("El code ingresado no existe")
        }
    }
}
