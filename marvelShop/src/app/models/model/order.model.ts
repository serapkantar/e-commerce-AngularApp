import { Injectable } from "@angular/core";
import { Cart } from "../services/cart.model";

 @Injectable()

export class Order{

    public id?:number ;
    public name?:string;
    public address?:string;
    public city?:string;
    public phone?:string;
    public email?:string;


    public isSent:boolean=false;

    constructor(public cart:Cart){}


    clearOrder(){
        
        this.id=undefined;
        this.name="";
        this.address="";
        this.city="";
        this.email="";
        this.phone="";

        this.isSent=false;
        this.cart.clearAll();
    }
}