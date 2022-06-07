import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/models/model/order.model';
import { OrderRepository } from 'src/app/models/services/order.repository';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


 orderSent: boolean = false;
 submitted: boolean = false;

  constructor(
    public order:Order,
    private orderRepository:OrderRepository

    ) { }

  ngOnInit(): void {
  }


  submitOrder(form: NgForm) {
    this.submitted = true;
    console.log(form);
    if (form.valid) {
      this.orderRepository.saveOrder(this.order)
        .subscribe(order => {
          this.order.clearOrder();
          this.orderSent = true;
          this.submitted = false; 
        })
    }
  }


}
