import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";

@Injectable()

export class Cart {
    public items: CartItem[] = []
    public itemCount: number = 0;
    public total: number = 0;

    addItem(product: Product, quantity: number = 1) {
        let item = this.items.find(i => i.product.id == product.id)
        if (item != undefined) {
            item.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity))
        }
        this.calculate();
    }
    // updateQuantity(){

    // }

    calculate() {
        this.itemCount = 0;
        this.total = 0;

        this.items.forEach(i => {
            //any? 
            this.itemCount += i.quantity;
            this.total += (i.quantity * (i.product.unitPrice));
        })
    }


    removeItem(id: number) {

        let index = this.items.findIndex(i => i.product.id == id)
        this.items.splice(index, 1);
        this.calculate();
    }
    clearAll() {
        this.items = [];
        this.itemCount = 0;
        this.total = 0;
    }

}

export class CartItem {

    constructor(
        public product: Product,
        public quantity: number,

    ) { }
}